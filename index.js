 const express = require('express');
const app = express();
const userRoute = require('./routes/users');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/users',userRoute);

 module.exports = app;
