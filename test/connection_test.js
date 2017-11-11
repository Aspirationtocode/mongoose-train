const assert = require('assert');
const mongoose = require('mongoose');
const Person = require('../models/person');

// describe test
describe('saving records', () => {
	// create test
	it('saving record to db', done => {
		const person = new Person({
			age: 20,
			name: 'Evgeniy'
		});
		person.save().then(function() {
			assert(!person.isNew);
			done();
		});
	});
});
