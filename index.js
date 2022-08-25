 const express = require('express');
const app = express();
const userRoute = require('./routes/users');
const mainmenu = require('./routes/index_routes');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/users',userRoute);
app.use('/',mainmenu);
 module.exports = app;
