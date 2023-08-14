const ip = require('ip')
const net = require('net')
const express = require('express')

const PORT = process.env.PORT || 80
const localIPAddress = ip.address() // Get the local IP address

const connectedClients = []

const server = net.createServer((client) => {
  client.on('data', (data) => {
    if (data.length === 0) {
      client.end()
    } else {
      console.log(data.toString())

      // Send a response back to the client
      client.write('Response from server: Data received!')
    }
  })

  client.on('end', () => {
    console.log('Closing connection')
  })
})

server.on('connection', (socket) => {
  console.log('Client connected')
  connectedClients.push(socket)
  socket.write('Hello from server!\n')
  console.log({ socket })
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

server.listen(PORT, () => {
  console.log(`Server is running at http://${localIPAddress}:${PORT}`)
})

// // Send a message to connected clients every 10 seconds
// setInterval(() => {
//   connectedClients.forEach((client) => {
//     client.write('Hello from server every 10 seconds!\n')
//   })
//   console.log(`Sent message to ${connectedClients.length} clients`)
// }, 10000)

// const app = express()

// app.get('/', (req, res) => {
//   res.send(`Number of connected clients: ${connectedClients.length}`)
// })

// const httpPort = 4000 // Choose a different port for the HTTP server
// app.listen(httpPort, () => {
//   console.log(`HTTP server is running at http://${localIPAddress}:${httpPort}`)
// })

// app.post('/pulse', async (req, res) => {
//   console.log(req)
//   console.log('toggling the lights 💡')
//   // this data will be determined from the post request data
//   const jsonData = {
//     env: 'dev',
//     author: 'George van Heerden',
//   }

//   const jsonStr = JSON.stringify(jsonData)

//   connectedClients.forEach((client) => {
//     client.write(jsonStr + '\n') // Add '\n' to indicate the end of the message
//   })
//   console.log(`Sent message to ${connectedClients.length} clients`)
//   // console.log('Done 🐐', response)
//   res.send('Done 🐐')
// })
