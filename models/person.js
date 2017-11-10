const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

// Create person schema and model
const personSchema = new Schema({
	age: Number,
	name: String,
	gender: String,
	children: [String]
});

const person = mongoose.model('person', personSchema);

module.exports = person;
