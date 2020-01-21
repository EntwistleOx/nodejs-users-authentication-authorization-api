const auth = {};

auth.isAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }
    res.status(404).send('Is not Authorized')
}

module.exports = auth;