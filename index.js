const express = require('express')
const app = express()
const cors = require('cors')
const { ZingMp3 } = require('./zingmp3')

app.use(cors({
    origin: "*"
}))
app.get('/', (req, res) => res.send('Hello Ooms'))

app.get('/ooms-api/home', (req, res) => {
    ZingMp3.getHome().then((data) => {
        return res.send(data)
    })
})
app.get('/ooms-api/chart-home', (req, res) => {
    ZingMp3.getChartHome().then((data) => {
        return res.send(data)
    })
})
app.get('/ooms-api/top100', (req, res) => {
    ZingMp3.getTop100().then((data) => {
        return res.send(data)
    })
})
app.get('/ooms-api/detailplaylist', (req, res) => {
    const id = req.query.id
    ZingMp3.getDetailPlaylist(id).then((data) => {
        return res.send(data)
    })
})
app.get('/ooms-api/detaibottom', (req, res) => {
    const id = req.query.id
    ZingMp3.getDetailPlaylistBottom(id).then((data) => {
        return res.send(data)
    })
})
app.get('/ooms-api/song', (req, res) => {
    const id = req.query.id
    ZingMp3.getSong(id).then((data) => {
        return res.send(data)
    })
})
app.get('/ooms-api/artist', (req, res) => {
    const name = req.query.name
    ZingMp3.getArtist(name).then((data) => {
        return res.send(data)
    })
})
app.get('/ooms-api/getListSong', (req, res) => {
    const id = req.query.id
    const page = req.query.page
    const count = req.query.count
    ZingMp3.getListSong(id, page, count).then((data) => {
        return res.send(data)
    })
})

app.get('/ooms-api/recommendSong', (req, res) => {
    const id = req.query.id;
    ZingMp3.getRecommendSong(id).then((data) => {
        return res.send(data)
    })
})
app.get('/ooms-api/search', (req, res) => {
    const q = req.query.q;
    ZingMp3.search(q).then((data) => {
        return res.send(data)
    })
})

// "ZWDF7UEF"


const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));