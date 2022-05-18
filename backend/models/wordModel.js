const mongoose = require('mongoose');

const wordSchema = mongoose.Schema({
    text: {type: String, required: [true, 'Please add a text value'],
        maxLength: [5, 'Word must be 5 letters'], minLength: [5, 'Word must be 5 letters']},
});

module.exports = mongoose.model('Word', wordSchema);
