const Word = require("../models/wordModel");

const getOneWord = async (req, res) => {
    const word = await Word.aggregate().sample(1);

    res.status(200).json(word);
};

module.exports = {
    getOneWord
};
