const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('./models/userModel');

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
