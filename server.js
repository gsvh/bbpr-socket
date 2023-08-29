const ip = require('ip')
const net = require('net')
const fs = require('fs')

function parseHttpRequest(requestString) {
  const lines = requestString.split('\r\n')
  const [method, path, version] = lines[0].split(' ')

  const headers = {}
  let body = ''

  let inBody = false
  for (let i = 1; i < lines.length; i++) {
    if (!inBody && lines[i] === '') {
      inBody = true
      continue
    }
    if (!inBody) {
      const [name, value] = lines[i].split(': ')
      headers[name.toLowerCase()] = value
    } else {
      body += lines[i]
    }
  }

  return {
    method,
    path,
    version,
    headers,
    body,
  }
}

const responses = {
  200: 'HTTP/1.1 200 OK\r\n\r\n',
  400: 'HTTP/1.1 400 Bad Request\r\n\r\n',
  401: 'HTTP/1.1 401 Unauthorized\r\n\r\n',
  404: 'HTTP/1.1 404 Not Found\r\n\r\n',
  500: 'HTTP/1.1 500 Internal Server Error\r\n\r\n',
}

const methods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
}

const key = process.env.KEY
function crypt(input, key) {
  let crypted = ''
  for (let i = 0; i < input.length; ++i) {
    crypted += String.fromCharCode(
      input.charCodeAt(i) ^ key.charCodeAt(i % key.length)
    )
  }
  return crypted
}

function validateHeaders(headers) {
  const correctXEventKey = headers['x-event-key'] === 'pullrequest:fulfilled'
  // const correctXHookUUID =
  //   headers['x-hook-uuid'] === 'b2b2b2b2-b2b2-b2b2-b2b2-b2b2b2b2b2b2'
  const correctUserAgent = headers['user-agent'] === 'Bitbucket-Webhooks/2.0'
  const correctContentType = headers['content-type'] === 'application/json'
  return (
    correctXEventKey &&
    // correctXHookUUID &&
    correctUserAgent &&
    correctContentType
  )
}
function parseBody(body) {
  try {
    const {
      repository: {
        name: repositoryName,
        project: { name: projectName },
      },
      pullrequest: {
        author: { display_name: authorName },
        destination: {
          branch: { name: branchName },
        },
      },
    } = body
    return {
      valid: true,
      data: { repositoryName, projectName, authorName, branchName },
    }
  } catch (error) {
    return { valid: false, data: null }
  }
}

function validateRequest(request) {
  const { path, headers, body } = request
  const correctPath = path === '/bitbucket'
  const correctHeaders = validateHeaders(headers)
  const { valid: correctBody } = parseBody(JSON.parse(body))
  return correctPath && correctHeaders && correctBody
}

const PORT = process.env.PORT || 80
const localIPAddress = ip.address() // Get the local IP address

const connectedClients = []
const credentials = {
  username: process.env.CREDENTIALS_NAME,
  password: process.env.CREDENTIALS_PASSWORD,
}

const credentialsString = `${credentials.username}:${credentials.password}`
const server = net.createServer((socket) => {
  console.log('Client connected')

  socket.on('data', (data) => {
    const request = parseHttpRequest(data.toString('utf-8'))

    if (!methods[request?.method]) {
      const decryptedCredentials = crypt(request.method, key)
      if (decryptedCredentials === credentialsString) {
        connectedClients.push(socket)
        const OK = crypt(JSON.stringify({ status: 'OK' }), key)
        socket.write(OK, 'utf-8')
      } else {
        const ERROR = crypt(JSON.stringify({ status: 'ERROR' }), key)
        socket.write(ERROR, 'utf-8')
        socket.end()
      }
    }
    // can connect
    else {
      //close connection

      switch (request.method) {
        case methods.GET:
          console.log('GET request', request.path)
          switch (request.path) {
            case '/':
              fs.readFile('index.html', (err, content) => {
                if (err) {
                  socket.write(responses[500], 'utf-8', () => {
                    socket.end() // Close the connection after sending the response))
                  })
                } else {
                  socket.write(
                    'HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n'
                  )
                  socket.write(content.toString())
                  socket.end()
                  console.log('Sent index.html')
                }
              })
              break
            case '/favicon.ico':
              //return 404
              socket.write('HTTP/1.1 404 Not Found\r\n\r\n')
              socket.end()
          }
          break
        case methods.POST:
          console.log('POST request')

          const isValidBitbucketRequest = validateRequest(request)

          if (!isValidBitbucketRequest) {
            console.error('Invalid request')
            socket.write(responses[401], 'utf-8', () => {
              socket.end() // Close the connection after sending the response
            })
          }
          // // Send HTTP OK response
          socket.write(responses[200], 'utf-8', () => {
            socket.end() // Close the connection after sending the response
          })

          const { data } = parseBody(JSON.parse(request.body))

          let body
          if (
            ['master', 'production', 'prod', 'main'].includes(
              data.branchName.toLowerCase()
            )
          ) {
            body = {
              text1: 'Production deploy',
              text2: `${data.projectName}/${data.repositoryName}`,
              text3: `Destination branch: ${data.branchName}`,
            }
          } else if (
            ['dev', 'develop', 'development'].includes(
              data.branchName.toLowerCase()
            )
          ) {
            body = {
              text1: data.authorName,
              text2: `${data.projectName}/${data.repositoryName}`,
              text3: `Destination branch: ${data.branchName}`,
            }
          } else {
            body = null
          }

          if (body) {
            const encryptedBody = crypt(JSON.stringify(body), key)
            console.log(encryptedBody)

            if (connectedClients.length > 0) {
              connectedClients.forEach((esp32) => {
                esp32.write(encryptedBody, 'utf-8')
              })
            }
          }

          break
        case methods.PUT ?? methods.DELETE ?? methods.PATCH:
          console.log('Invalid request')
          // Send HTTP 400 Bad Request response
          socket.write(responses[400], 'utf-8', () => {
            socket.end() // Close the connection after sending the response
          })
          break
        default:
          console.log('Unknown request', request)
          break
      }
    }

    socket.on('close', () => {
      console.log('Client disconnected')
      const index = connectedClients.indexOf(socket)
      if (index !== -1) {
        connectedClients.splice(index, 1)
      }
    })

    socket.on('error', (err) => {
      console.log('Socket error:', err)
    })
  })
})

server.listen(PORT, () => {
  console.log(`Server is running at http://${localIPAddress}:${PORT}`)
})
