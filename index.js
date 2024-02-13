

require('dotenv').config()
console.log('Vikas Laxman Kare');

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