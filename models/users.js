// user.js

const mongoose = require('mongoose');

// Destructuring assignment
// The destructuring assignment syntax is a JavaScript expression that makes 
// it possible to unpack values from arrays, or properties from objects, 
// into distinct variables.

//const Schema = mongoose.Schema;
const { Schema } = mongoose;


const userSchema = new Schema({
    googleId: String,
    credits: {  type: Number, default: 0 }
});


mongoose.model('users', userSchema);