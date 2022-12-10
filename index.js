const express = require('express')
const { ZingMp3 } = require("zingmp3-api-full")
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello '))

app.get('/api/home', (req, res) => {
    ZingMp3.getHome().then((data) => {
        return res.send(data)
    })

})
app.listen(port, () => console.log(`Listen port 3000`))