const express = require('express')
const { ZingMp3 } = require("zingmp3-api-full-v2")
const app = express()
const cors = require('cors')

app.use(cors({
    origin: "*"
}))
app.get('/', (req, res) => res.send('Hello '))

app.get('/api/home', (req, res) => {
    ZingMp3.getHome().then((data) => {
        return res.send(data)
    })
})
app.get('/api/detailplaylist', (req, res) => {
    const id = req.query.id
    ZingMp3.getDetailPlaylist(id).then((data) => {
        return res.send(data)
    })
})
app.get('/api/song', (req, res) => {
    const id = req.query.id
    ZingMp3.getSong(id).then((data) => {
        return res.send(data)
    })
})
// "ZWDF7UEF"


const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));