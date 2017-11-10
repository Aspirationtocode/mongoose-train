const assert = require('assert');
const Person = require('./models/person');

// describe test
describe('saving records', function() {
	// create test
	it('saving record to db', done => {
		let person = new Person({
			age: 20,
			name: 'Evgeniy',
			gender: 'male',
			children: ['s']
		});
		person.save().then(() => {
			assert(person.isNew === false);
			done();
		});
	});
});
