const fs = require('fs');
const express = require('express');
const requests = require('requests');
const router = require('./routs/homeRoute');

const app = express();
const port = process.env.PORT || 8080
app.use(express.static('public'));
app.use(express.json());
app.set('view engine','ejs');


app.use(router);


app.listen(port);

