const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
    //username and passport should be generated by passport-local-mongoose
    // username: {type: String, required: [true, 'Please add a username']},
    // password: {type: String, required: [true, 'Please add a password']},
    words:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Word' }]
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
