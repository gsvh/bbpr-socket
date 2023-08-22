/** HEADER */

// POST / HTTP/1.1
// X-Event-Key: pullrequest:fulfilled
// X-Hook-UUID: 392e8f82-3f2e-4b7c-91f5-db18258034f6
// X-Event-Time: Mon, 21 Aug 2023 16:11:07 GMT
// User-Agent: Bitbucket-Webhooks/2.0
// X-Attempt-Number: 1
// X-Request-UUID: d88d62b3-b767-4fff-a5a5-480b75755953
// Content-Type: application/json
// X-B3-TraceId: 392d7a43c59a0692
// X-B3-SpanId: 392d7a43c59a0692
// X-B3-Sampled: 1
// Content-Length: 6647
// Accept: */*
// Host: 3.81.161.102
// Via: 1.1 ip-10-18-21-83.us-west-2.compute.internal (squid)
// Cache-Control: max-age=259200
// Connection: keep-alive
// X-atl-outbound-proxy: true

/** EMPTY LINE INDICATES END OF HEADER */

/** BODY */
const data = {
  repository: {
    type: 'repository',
    full_name: 'sovtech/merge-light',
    links: {
      self: {
        href: 'https://api.bitbucket.org/2.0/repositories/sovtech/merge-light',
      },
      html: { href: 'https://bitbucket.org/sovtech/merge-light' },
      avatar: {
        href: 'https://bytebucket.org/ravatar/%7Bdc89921a-6b9d-4fb0-be44-c8d6ed48b8c6%7D?ts=default',
      },
    },
    name: 'merge-light',
    scm: 'git',
    website: null,
    owner: {
      display_name: 'SovTech',
      links: {
        self: {
          href: 'https://api.bitbucket.org/2.0/workspaces/%7B41ff9e5f-ef3a-4791-a7ce-b481e9709d07%7D',
        },
        avatar: { href: 'https://bitbucket.org/account/sovtech/avatar/' },
        html: {
          href: 'https://bitbucket.org/%7B41ff9e5f-ef3a-4791-a7ce-b481e9709d07%7D/',
        },
      },
      type: 'team',
      uuid: '{41ff9e5f-ef3a-4791-a7ce-b481e9709d07}',
      username: 'sovtech',
    },
    workspace: {
      type: 'workspace',
      uuid: '{41ff9e5f-ef3a-4791-a7ce-b481e9709d07}',
      name: 'SovTech',
      slug: 'sovtech',
      links: {
        avatar: {
          href: 'https://bitbucket.org/workspaces/sovtech/avatar/?ts=1668583920',
        },
        html: { href: 'https://bitbucket.org/sovtech/' },
        self: { href: 'https://api.bitbucket.org/2.0/workspaces/sovtech' },
      },
    },
    is_private: true,
    project: {
      type: 'project',
      key: 'SIOT',
      uuid: '{8dcb519c-8d21-4dda-b4bf-c55a4ba45e8c}',
      name: 'SovTech IoT',
      links: {
        self: {
          href: 'https://api.bitbucket.org/2.0/workspaces/sovtech/projects/SIOT',
        },
        html: {
          href: 'https://bitbucket.org/sovtech/workspace/projects/SIOT',
        },
        avatar: {
          href: 'https://bitbucket.org/account/user/sovtech/projects/SIOT/avatar/32?ts=1691509149',
        },
      },
    },
    uuid: '{dc89921a-6b9d-4fb0-be44-c8d6ed48b8c6}',
  },
  actor: {
    display_name: 'George van Heerden',
    links: {
      self: {
        href: 'https://api.bitbucket.org/2.0/users/%7Bd5c5371b-6f44-4dd3-9c7d-dce4f605ac42%7D',
      },
      avatar: {
        href: 'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6200cc29e5caff0070e177f8/f4ae19f6-0846-4b03-92b7-ba7b62f7a6af/128',
      },
      html: {
        href: 'https://bitbucket.org/%7Bd5c5371b-6f44-4dd3-9c7d-dce4f605ac42%7D/',
      },
    },
    type: 'user',
    uuid: '{d5c5371b-6f44-4dd3-9c7d-dce4f605ac42}',
    account_id: '6200cc29e5caff0070e177f8',
    nickname: 'George van Heerden',
  },
  pullrequest: {
    comment_count: 0,
    task_count: 0,
    type: 'pullrequest',
    id: 13,
    title: 'test2',
    description: '',
    rendered: {
      title: {
        type: 'rendered',
        raw: 'test2',
        markup: 'markdown',
        html: '<p>test2</p>',
      },
      description: {
        type: 'rendered',
        raw: '',
        markup: 'markdown',
        html: '',
      },
    },
    state: 'MERGED',
    merge_commit: {
      type: 'commit',
      hash: '1d597a4160cf',
      links: {
        self: {
          href: 'https://api.bitbucket.org/2.0/repositories/sovtech/merge-light/commit/1d597a4160cf',
        },
        html: {
          href: 'https://bitbucket.org/sovtech/merge-light/commits/1d597a4160cf',
        },
      },
    },
    close_source_branch: false,
    closed_by: {
      display_name: 'George van Heerden',
      links: {
        self: {
          href: 'https://api.bitbucket.org/2.0/users/%7Bd5c5371b-6f44-4dd3-9c7d-dce4f605ac42%7D',
        },
        avatar: {
          href: 'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6200cc29e5caff0070e177f8/f4ae19f6-0846-4b03-92b7-ba7b62f7a6af/128',
        },
        html: {
          href: 'https://bitbucket.org/%7Bd5c5371b-6f44-4dd3-9c7d-dce4f605ac42%7D/',
        },
      },
      type: 'user',
      uuid: '{d5c5371b-6f44-4dd3-9c7d-dce4f605ac42}',
      account_id: '6200cc29e5caff0070e177f8',
      nickname: 'George van Heerden',
    },
    author: {
      display_name: 'George van Heerden',
      links: {
        self: {
          href: 'https://api.bitbucket.org/2.0/users/%7Bd5c5371b-6f44-4dd3-9c7d-dce4f605ac42%7D',
        },
        avatar: {
          href: 'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/6200cc29e5caff0070e177f8/f4ae19f6-0846-4b03-92b7-ba7b62f7a6af/128',
        },
        html: {
          href: 'https://bitbucket.org/%7Bd5c5371b-6f44-4dd3-9c7d-dce4f605ac42%7D/',
        },
      },
      type: 'user',
      uuid: '{d5c5371b-6f44-4dd3-9c7d-dce4f605ac42}',
      account_id: '6200cc29e5caff0070e177f8',
      nickname: 'George van Heerden',
    },
    reason: '',
    created_on: '2023-08-21T16:10:59.784319+00:00',
    updated_on: '2023-08-21T16:11:07.633443+00:00',
    destination: {
      branch: { name: 'main' },
      commit: {
        type: 'commit',
        hash: '454bf1662648',
        links: {
          self: {
            href: 'https://api.bitbucket.org/2.0/repositories/sovtech/merge-light/commit/454bf1662648',
          },
          html: {
            href: 'https://bitbucket.org/sovtech/merge-light/commits/454bf1662648',
          },
        },
      },
      repository: {
        type: 'repository',
        full_name: 'sovtech/merge-light',
        links: {
          self: {
            href: 'https://api.bitbucket.org/2.0/repositories/sovtech/merge-light',
          },
          html: { href: 'https://bitbucket.org/sovtech/merge-light' },
          avatar: {
            href: 'https://bytebucket.org/ravatar/%7Bdc89921a-6b9d-4fb0-be44-c8d6ed48b8c6%7D?ts=default',
          },
        },
        name: 'merge-light',
        uuid: '{dc89921a-6b9d-4fb0-be44-c8d6ed48b8c6}',
      },
    },
    source: {
      branch: { name: 'test-1' },
      commit: {
        type: 'commit',
        hash: '6d0ede00783b',
        links: {
          self: {
            href: 'https://api.bitbucket.org/2.0/repositories/sovtech/merge-light/commit/6d0ede00783b',
          },
          html: {
            href: 'https://bitbucket.org/sovtech/merge-light/commits/6d0ede00783b',
          },
        },
      },
      repository: {
        type: 'repository',
        full_name: 'sovtech/merge-light',
        links: {
          self: {
            href: 'https://api.bitbucket.org/2.0/repositories/sovtech/merge-light',
          },
          html: { href: 'https://bitbucket.org/sovtech/merge-light' },
          avatar: {
            href: 'https://bytebucket.org/ravatar/%7Bdc89921a-6b9d-4fb0-be44-c8d6ed48b8c6%7D?ts=default',
          },
        },
        name: 'merge-light',
        uuid: '{dc89921a-6b9d-4fb0-be44-c8d6ed48b8c6}',
      },
    },
    reviewers: [],
    participants: [],
    links: {
      self: {
        href: 'https://api.bitbucket.org/2.0/repositories/sovtech/merge-light/pullrequests/13',
      },
      html: {
        href: 'https://bitbucket.org/sovtech/merge-light/pull-requests/13',
      },
      commits: {
        href: 'https://api.bitbucket.org/2.0/repositories/sovtech/merge-light/pullrequests/13/commits',
      },
      approve: {
        href: 'https://api.bitbucket.org/2.0/repositories/sovtech/merge-light/pullrequests/13/approve',
      },
      'request-changes': {
        href: 'https://api.bitbucket.org/2.0/repositories/sovtech/merge-light/pullrequests/13/request-changes',
      },
      diff: {
        href: 'https://api.bitbucket.org/2.0/repositories/sovtech/merge-light/diff/sovtech/merge-light:6d0ede00783b%0D454bf1662648?from_pullrequest_id=13&topic=true',
      },
      diffstat: {
        href: 'https://api.bitbucket.org/2.0/repositories/sovtech/merge-light/diffstat/sovtech/merge-light:6d0ede00783b%0D454bf1662648?from_pullrequest_id=13&topic=true',
      },
      comments: {
        href: 'https://api.bitbucket.org/2.0/repositories/sovtech/merge-light/pullrequests/13/comments',
      },
      activity: {
        href: 'https://api.bitbucket.org/2.0/repositories/sovtech/merge-light/pullrequests/13/activity',
      },
      merge: {
        href: 'https://api.bitbucket.org/2.0/repositories/sovtech/merge-light/pullrequests/13/merge',
      },
      decline: {
        href: 'https://api.bitbucket.org/2.0/repositories/sovtech/merge-light/pullrequests/13/decline',
      },
      statuses: {
        href: 'https://api.bitbucket.org/2.0/repositories/sovtech/merge-light/pullrequests/13/statuses',
      },
    },
    summary: {
      type: 'rendered',
      raw: '',
      markup: 'markdown',
      html: '',
    },
  },
}
