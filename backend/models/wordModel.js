const mongoose = require('mongoose');

const wordSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    text: {type: String, required: [true, 'Please add a text value'],
        maxLength: [5, 'Word must be 5 letters'], minLength: [5, 'Word must be 5 letters']},
});

module.exports = mongoose.model('Word', wordSchema);
