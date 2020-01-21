var express = require('express');
var router = express.Router();
const models = require('../models');
const User = models.User;
const Sequelize = require('sequelize');
const  { authLocal }  = require('../middlewares/passport');
const { isAuthenticated } = require('../middlewares/authentication');


/** POST - authenticate a user. */
router.post('/login', authLocal, (req, res) => {
    if(req.user) {
        res.status(200).send('Login successfully')
    }
    return next();
})

/** POST - unthenticate a user. */
router.post('/logout', isAuthenticated, (req, res) => {
    req.logOut()
    res.status(200).send('Logout successfully')
})

module.exports = router