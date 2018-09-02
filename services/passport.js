// passport.js

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {

    console.log('serializeUser:', user.id);

    done(null, user.id); // the mongo generated document id is being used
});

passport.deserializeUser((id, done) => {

    console.log('deserializeUser:', id);

    User.findById(id)
        .then((user) => {
            done(null, user);
        });
});

passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: keys.googleRedirectURL,
        proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
        console.log('GoogleStrateg');
        console.log('    accessToken:', accessToken);
        console.log('    refreshToken:', refreshToken);
        console.log('    profile:', profile);
        const existingUser = await User.findOne({googleId: profile.id});

        if (existingUser) {
            // a user was found with the id
            console.log('Found a user:', existingUser);
            return done(null, existingUser);
        }

        // a user was not found with the id
        const user = await new User({googleId: profile.id}).save();
        done(null, user);
    })
);
