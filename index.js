// index.js
// Create by Anthony Leotta
// 8/25/2018

const express = require('express'); // this is not a ES2015 import statement
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/users');
require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        // maxAge is how long the cookie can exist before it is expired
        maxAge: 30 * 24 * 60 * 60 * 1000,  // 30 days
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

const authRoutes = require('./routes/authRoutes');
authRoutes(app);

const PORT = process.env.PORT || 5000;
console.log('Running on port ', PORT);
app.listen(PORT);