const http = require('http');
const database = require('./connectDb');
const app = require('./index')
const port = 3000;
const server = http.createServer(app);
server.listen(port)
console.log('Server running at http://127.0.0.1:3000/');