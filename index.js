 const express = require('express');
const app = express();
const userRoute = require('./routes/users');
const Doctoroute = require('./routes/doctor_routes');
const mainmenu = require('./routes/index_routes');
const path = require("path")
const apiMetrics = require('prometheus-api-metrics');
app.use(apiMetrics());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/users',userRoute);
app.use('/doctor',Doctoroute);
app.use('/',mainmenu);
app.use('/uploads',express.static('uploads'))
 module.exports = app;
