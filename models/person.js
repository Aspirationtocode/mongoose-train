const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create person schema and model
const personSchema = new Schema({
	age: Number,
	name: String
});

const Person = mongoose.model('person', personSchema);

module.exports = Person;
