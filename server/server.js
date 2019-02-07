const path = require('path')
const express = require('express')

const server = express()
const feelings = require('./routes/feelings')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/feelings', feelings)

module.exports = server
