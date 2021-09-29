const fs = require('fs');
const express = require('express');
const requests = require('requests');
const router = require('./routs/homeRoute');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.set('view engine','ejs');


app.use(router);


app.listen(8080);

