const express = require('express');

const port = process.env.PORT || 5050;

const server = express();

server.get('/', (req, res) => {
    res.send('hello postgreSQL')
})

server.listen(port, function () {
    console.log('listening on port', port, '...');
});