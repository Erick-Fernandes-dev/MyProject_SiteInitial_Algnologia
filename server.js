const express = require('express');
const server = express();

server.get('/', function(req, res) {
    return res.send("Hello World!");
})

server.listen(8081, function() {
    console.log("O servidor está rodando")
})