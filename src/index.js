const express = require('express')
const http = require('http')
const path = require('path')
const socketio = require('socket.io')
const Filter = require('bad-words')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

io.on('connection', (socket) => {
    console.log('New WebSocket connection')

    socket.emit('message', 'Welcome!')
    socket.broadcast.emit('message', 'A new user has joined in')

    socket.on('sendMessage', (message, callback) => {
        io.emit('message', message)
        callback('Delivered!')
    })

    socket.on('disconnect', () => {
        io.emit('message', 'A user has left!')
    })

    socket.on('sendLocation', (location) => {
        console.log('away')
        console.log(location)
        io.emit('message', `https://google.com/maps?q=${location.latitude},${location.longitude}`)
    })
})

server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})