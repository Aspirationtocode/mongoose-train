const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/persons', { useMongoClient: true });
mongoose.Promise = global.Promise;
mongoose.connection
	.once('open', () => {
		console.log('Connected to MongoDB.');
	})
	.on('error', err => {
		console.log(`Not connected to MongoDB because of error: ${err}.`);
	});
