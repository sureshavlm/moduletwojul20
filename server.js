const http = require('http'); 
const os = require('os');
const path = require('path');

const server = http.createServer(function(req, res) {
                    res.end('You have purchased the product succesfuly.');
                });

server.listen(3000, function() {
    console.log('Server is running on port 3000 ');
});

