const mongoose = require('mongoose'),
	URLSlugs = require('mongoose-url-slugs'),
  passportLocalMongoose = require('passport-local-mongoose');


const User = new mongoose.Schema({
  // username, password will be added to schema by passport local mongoose
  words:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Word' }]
});

// const Item = new mongoose.Schema({
// 	name: {type: String, required: true},
// 	quantity: {type: Number, min: 1, required: true},
// 	checked: {type: Boolean, default: false, required: true}
// }, {
// 	_id: true
// });

//word schema for wordle-like game
const Word = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  text: {type: String, required: true, minLength: 5},
	appear: {type: Number, required: true},
	createdAt: {type: Date, required: true},
});

/**
 * word schema for flashcard-game
 *
 * const Word = new mongoose.Schema({
 *   user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
 *   text: {type: String, required: true},
 *   def: {type: String, required: true},
 * 	createdAt: {type: Date, required: true},
 * 	appear: {type: Number, required: true},
 * });
 *
 */

User.plugin(passportLocalMongoose);
Word.plugin(URLSlugs('name'));

mongoose.model('User', User);
mongoose.model('Word', Word);
// mongoose.model('Item', Item);
mongoose.connect('mongodb://localhost/grocerydb');
