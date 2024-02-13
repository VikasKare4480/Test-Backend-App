

require('dotenv').config()
console.log('Vikas Laxman Kare');

const userData = {
    "login": "VikasKare4480",
    "id": 91896131,
    "node_id": "U_kgDOBXo5Qw",
    "avatar_url": "https://avatars.githubusercontent.com/u/91896131?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/VikasKare4480",
    "html_url": "https://github.com/VikasKare4480",
    "followers_url": "https://api.github.com/users/VikasKare4480/followers",
    "following_url": "https://api.github.com/users/VikasKare4480/following{/other_user}",
    "gists_url": "https://api.github.com/users/VikasKare4480/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/VikasKare4480/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/VikasKare4480/subscriptions",
    "organizations_url": "https://api.github.com/users/VikasKare4480/orgs",
    "repos_url": "https://api.github.com/users/VikasKare4480/repos",
    "events_url": "https://api.github.com/users/VikasKare4480/events{/privacy}",
    "received_events_url": "https://api.github.com/users/VikasKare4480/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Vikas Kare",
    "company": null,
    "blog": "",
    "location": "PUNE",
    "email": null,
    "hireable": null,
    "bio": "I am starting with creating a small scale application now and have an eagerness to create large scale applications and deploy them successfully.",
    "twitter_username": null,
    "public_repos": 34,
    "public_gists": 0,
    "followers": 1,
    "following": 5,
    "created_at": "2021-10-04T14:00:11Z",
    "updated_at": "2024-01-14T05:59:18Z"
  }

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/vikas', (req, res) => {

        res.send('<h1>Hey this is vikas kares Server</h1>');
    }
)

app.get('/youtube', (req, res) => {

    res.send('Youtubers Responce');
})

app.get('/github', (req, res) => {

    res.json(userData);
})