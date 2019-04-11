"use strict";
require('./config/config');

const path = require('path');
const http = require('http');
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
// const {mongoose} = require('./db/mongoose');
const api = require('./router/api.router');

var port = process.env.PORT;
var app = express();
var server = http.createServer(app);

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    exposedHeaders: ['*'],
  }

app.set('trust proxy', true);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public')));
app.use(cors(corsOptions));
// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });
app.use(morgan('dev'));

app.use('/api', api);

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

server.listen(port, () => {
    console.log(`Server running on port: ${port}...`);
});
