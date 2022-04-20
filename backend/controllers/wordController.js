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
    Word.countDocuments({text: req.body.text}, async (err, count) => {
        if (count === 0) {
            const word = await Word.create({
                // user: req.user.id,
                text: req.body.text
            }).catch(err => {
                res.send('err', err);
            });

            res.status(200).json(word);
        } else {
            res.send('already exists');
        }
    });
};

const delWord = async (req, res) => {
    // if(!req.body.text){
    //     res.status(400);
    //     throw new Error('Something went wrong');
    // }

    Word.countDocuments({}, async(err,count) => {
        if (count >= 10){
            const deletedWord = await Word.deleteOne({text: req.body.text});
            res.status(200).json(deletedWord);
        } else{
            res.send('less 10');
        }

    });

};

module.exports = {
    getWords,
    addWords,
    delWord
};
