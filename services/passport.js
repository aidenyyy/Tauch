const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../.config/keys');
//retrieve users from our database
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
    //this user.id is not profile id generated by google
    //it is a dataid generated by mongoDB
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user =>{
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
        User.findOne({googleId: profile.id}).then(existingUser => {
            if(existingUser) {
                //already have this userid in our database
                done(null, existingUser);
            } else { 
                //we don't have this userid in our database
                //create a new user in our database
                new User({googleId: profile.id}).save().then(user => 
                    done(null, user));
            }
        });
    }
    )
);