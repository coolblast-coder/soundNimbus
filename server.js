const express = require('express');
const app = express();

const path = require('path')
const HTTP_PORT = process.env.port || 8080
const onHttptart = () => console.log('HTTP server is listening on port ${HTTP_PORT} 🚀🚀🚀')
    //app.get
    //app.post
    //app.use

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})



app.listen(HTTP_PORT, onHttptart);