// billingRoutes.js
const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
    app.post('/api/stripe', requireLogin, async (req, res) => {
        //console.log('/api/stripe');

        // this code was moved to the middleware
        //if (!req.user) {
        //    res.status(401).send({success: false, user: null});
        //}

        var chargeRequest = {
            amount: 500,
            currency: 'usd',
            description: '$5 for % credits',
            source: req.body.id
        };

        //console.log('chargeRequest:', chargeRequest);
        const chargeResponse = await stripe.charges.create(chargeRequest);
        //console.log('chargeResponse:', chargeResponse);
        req.user.credits += 5;
        const user = await req.user.save();                
        res.send(user);    
    });
};