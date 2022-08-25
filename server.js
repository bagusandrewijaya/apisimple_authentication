const http = require('http');
const database = require('./connectDb');
const app = require('./index')
const port = 3000;
const server = http.createServer(app);
server.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on port`);
});