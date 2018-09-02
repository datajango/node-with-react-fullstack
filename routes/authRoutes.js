// authRoutes.js
const passport = require('passport');

module.exports = (app) => {

    app.get('/auth/google',        
        passport.authenticate('google', { scope: ['profile', 'email']})
    );

    app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
        
            console.log('/auth/google/callback');

            res.redirect('/surveys');
        }
    );

    app.get('/api/current_user', (req, res) => {
        try {
            console.log('/api/current_user', req.user);
            res.send(req.user);
        } catch (e) {
            console.error('caught', e);
            res.send(null);
        }
    });

    app.get('/api/session', (req, res) => {
        console.log('route /api/session');
        res.send(req.session);
    });

    app.get('/api/logout', (req, res) => {
        if (req.user) {
            console.log('/api/logout', req.user);
            req.logout();
            //res.send({"status": true});
            res.redirect('/');
        } else {
            console.log('/api/logout not logged in');
            //res.send({"status": false});
            res.redirect('/');
        }
    });
};