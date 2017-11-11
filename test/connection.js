const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const mongoDB = 'mongodb://localhost/persons';

before(done => {
	mongoose.connect(mongoDB, {
		useMongoClient: true
	});
	//Get the default connection and bind it to a variable
	var db = mongoose.connection;
	db
		.once('open', () => {
			console.log('Connection Established...');
			done();
		})
		.on('error', err => {
			console.error('Connection Error:' + error);
		});
});

beforeEach(done => {
	mongoose.connection.collections.people.drop();
	done();
});
