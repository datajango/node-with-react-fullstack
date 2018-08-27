// index.js
// Create by Anthony Leotta
// 8/25/2018
// -- using Common JS Modules

const express = require('express'); // this is not a ES2015 import statement

const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'hello world'});
})

const PORT = process.env.PORT || 5000;

app.listen(PORT);