const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Arpit:arpit12@cluster0-qryzn.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });


const app=express();
app.use(cors());


const myapi = require('./Rest/loginapi');
const mycontact = require('./Rest/contactapi');
const mycourse = require('./Rest/courseapi');
const myteacher = require('./Rest/teacherapi');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

app.use('/',myapi);
app.use('/',mycontact);
app.use('/',mycourse);
app.use('/',myteacher);


http.createServer(app).listen(process.env.PORT||3000);
console.log("BackEnd Server Is On = ", process.env.PORT||3000);