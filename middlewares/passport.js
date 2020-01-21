const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const models = require('../models');
const User = models.User;

passport.use('local-login', new localStrategy({
    
}, async (username, password, done) => {
    const user = await User.findOne({
        where: {
            username
        }
    });
    if(!user) {
        return done(null, false);
    }else {
        const match = await user.checkPassword(password);
        console.log(match)
        if(match) {
            return done(null, user)
        }else {
            return done(null, false);
        }
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findByPk(id)
    if(user) {
        done(null, user)
    }else {
        done(user.errors, null)
    }
});

const strategy = {}
strategy.authLocal = passport.authenticate('local-login')
module.exports = strategy