const express = require('express');
const app = express();

const path = require('path')
const musicData = require('./musicData')


const HTTP_PORT = process.env.HTTP_PORT || 8080
const onHttptart = () => console.log('HTTP server is listening on port ${HTTP_PORT} 🚀🚀🚀')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.redirect('/home')
})

app.get('/home', (req, res) => {
    // res.send('hello home')

    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get('/about', (req, res) => {
    res.send('hello about')
})

// app.get('/lyrics', (req, res) => {
//     // res.send('hello lyrics')
//     musicData.getAlbums().then((data) => {
//         res.json(data)
//     }).catch((error) => {
//         console.log(error)
//         res.status(404).send("ERROR!")
//     })
// })

app.get('/lyrics/:id', (req, res) => {
    // res.send('hello lyrics')
    musicData.getAlbums().then((data) => {
        // res.json(data)
        // res.send(req.params.id)
        // resolved Promice Data [idFromRequestParams].field
        res.json(data[req.params.id - 1].lyrics)
    }).catch((error) => {
        console.log(error)
        res.status(404).send("ERROR!")
    })
})

app.get('/info/:id', (req, res) => {
    // res.send('hello muisic')
    musicData.getAlbums().then((data) => {
        // res.json(data)
        // res.send(req.params.id)
        // resolved Promice Data [idFromRequestParams].field
        res.json(data[req.params.id - 1])
    }).catch((error) => {
        console.log(error)
        res.status(404).send("ERROR!")
    })

})


app.use((req, res) => {
    res.status(404).send("Page not found!")
})

app.listen(HTTP_PORT, onHttptart);