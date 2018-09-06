// surveyRoutes.js
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const Survey = mongoose.model('survey');
const surveyTemplate = require('../services/emailTemplates/surveylTemplate');

module.exports = (app) => {

    app.post('/api/surveys/thanks', async (req, res) => {
        res.send('Thanks for voting!');
    });

    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        const { title, subject, body, recipients} = req.body;
        //console.log(title, subject, body, recipients);

        //const rec = recipients.split(',').map(email => { return {email: email}});
        //const rec = recipients.split(',').map(email => ({ email }));
        const rec = recipients.split(',').map(email => ({ email: email.trim() }));

        //console.log('rec:', rec);

        const survey = new Survey({
            title: title,
            body: body,
            subject: subject,
            recipients: rec,
            _user: req.user.id,
            dateSent: Date.now()            
        });

        const mailer = new Mailer(survey, surveyTemplate(survey));        
        try {            
            await mailer.send();

            await survey.save();

            req.user.credits -= 1;

            const user = await req.user.save();

            res.send(user);

        } catch (err) {
            //console.error('Error mailer.send():', e);
            res.status(422).send(err);
        }
    });
};