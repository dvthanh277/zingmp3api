const express = require('express')
const { ZingMp3 } = require("zingmp3-api-full")
const app = express()

app.get('/', (req, res) => res.send('Hello '))

app.get('/api/home', (req, res) => {
    ZingMp3.getHome().then((data) => {
        return res.send(data)
    })

})
