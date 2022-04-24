const express = require('express');
const connectDB= require('./config/db');
const path = require('path');
require('dotenv').config();
const cors = require('cors');

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

//will also have wordRoutes for /words/list and /words/add
const wordRoutes = require('./routes/wordRoutes');
app.use('/words', wordRoutes);

//home route '/' will just direct to the game
const gameRoutes = require('./routes/gameRoutes');
app.use('/', gameRoutes);

//for deploying to heroku
if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html'));
    });
}


app.listen(PORT, () => console.log(`Server started on ${PORT}`));
