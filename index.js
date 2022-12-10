const express = require('express')
const { ZingMp3 } = require("zingmp3-api-full")
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

const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));