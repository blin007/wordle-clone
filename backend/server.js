const express = require('express');
const connectDB= require('./config/db');
const path = require('path');
require('dotenv').config();
require('./auth');
const cors = require('cors');
const passport = require('passport');
const cookieParser = require("cookie-parser");

const app = express();

const PORT = process.env.PORT || 5000;

connectDB().then(() => console.log('CONNECTED!'));

app.use(express.json());
//body parser middleware
app.use(express.urlencoded({ extended: false }));

//for safely receiving and posting data to frontend react app
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(cookieParser(process.env.SESSION_SECRET));

// enable sessions
const session = require('express-session');
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));

// passport setup
app.use(passport.initialize());
app.use(passport.session());

// route set up below
const userRoutes = require('./routes/userRoutes');
// /users/register ... /users/login ... /users/mywords
app.use('/users', userRoutes);

//will also have wordRoutes for /words/list and /words/add
const wordRoutes = require('./routes/wordRoutes');
app.use('/words', wordRoutes);

//home route '/' will just direct to the game

//for deploying to heroku
if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html'));
    });
}


app.listen(PORT, () => console.log(`Server started on ${PORT}`));
