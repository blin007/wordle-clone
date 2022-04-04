const mongoose = require('mongoose');

const wordSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    text: {type: String, required: [true, 'Please add a text value']},
});

module.exports = mongoose.model('Word', wordSchema);
