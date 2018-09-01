// authRoutes.js
const passport = require('passport');

module.exports = (app) => {

    app.get('/auth/google',
        passport.authenticate('google', { scope: ['profile', 'email']})
    );

    app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
            res.redirect('/surveys');
        }
    );

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    app.get('/api/session', (req, res) => {
        res.send(req.session);
    });

    app.get('/api/logout', (req, res) => {
        if (req.user) {
            //console.log('/api/logout', req.user);
            req.logout();
            //res.send({"status": true});
            res.redirect('/');
        } else {
            //console.log('/api/logout not logged in');
            //res.send({"status": false});
            res.redirect('/');
        }
    });
};