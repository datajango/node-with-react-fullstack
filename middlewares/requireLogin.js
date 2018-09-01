module.exports = (req, res, next) => {

    if (!req.user) {
        return res.status(401).send({success: false, error: 'You must sign-in'});
    }
    
    next();
};