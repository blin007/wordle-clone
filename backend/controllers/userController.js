const User = require('../models/userModel');
const passport = require('passport');

/**
 * Register new user
 * POST /users/register
 * Public
 */
const registerUser = (req, res) => {
    User.register(new User({username: req.body.username}), req.body.password, (err) => {
        if(err){
            res.status(400);
            throw new Error('Registration info not valid');
        } else {
            passport.authenticate('local')(req, res, ()=>{
                res.json({ username: req.body.username, password: req.body.password});
            });
        }
    });
};

/**
 * login/authenticate user
 * POST /users/login
 * Public
 */
const loginUser = (req, res, next) => {
    passport.authenticate('local', (err, user) => {
        if(err) {throw err;}
        if(user) {
            req.logIn(user, (err) => {
                if(err) {throw err;}
                res.send('Successfully authenticated');
                console.log(req.user);
            });
        } else{
            res.send('User does not exist');
        }
    })(req, res, next);
};

/**
 * Get user words
 * Get /users/mywords
 * Not public, only works for users who have logged in
 */

const getMyWords = async (req, res) => {
    const {_id, username} = await User.findById(req.user.id);
    res.status(200).json({
        id: _id,
        username,
    });
};

/**
 * Get all users in DB
 * Simply here to show functionality for demoing
 */
const getUsers = async(req, res) => {
    //clone to prevent execution of same object twice
    const users = await User.find().clone().catch(function(err){ console.log(err);});

    res.status(200).json(users);
};

module.exports = {
    registerUser,
    loginUser,
    getMyWords,
    getUsers
};
