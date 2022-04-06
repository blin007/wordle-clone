const Word = require('../models/wordModel');

const getWords = async (req, res) => {
    const words = await Word.find();

    res.status(200).json(words);
};

const addWords = async (req, res) => {
    if(!req.body.text){
        res.status(400);
        throw new Error('Please add text');
    }

    const word = await Word.create({
        // user: req.user.id,
        text: req.body.text
    }).catch(err => {
        res.send('err', err);
    });

    res.status(200).json(word);
};


module.exports = {
    getWords,
    addWords
};
