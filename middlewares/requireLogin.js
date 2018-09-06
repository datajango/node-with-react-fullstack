module.exports = (req, res, next) => {
    if (!req.user) {
        //console.log('404 You must sign-in');
        return res.status(401).send({success: false, error: 'You must sign-in'});
    }    
    next();
};