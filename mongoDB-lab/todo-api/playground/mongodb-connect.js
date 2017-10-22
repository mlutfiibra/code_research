//follow the MongoDB API documentation 
//const MONGO_CLIENT = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//callback url
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	} else {
		console.log('Connected to MongoDB server');
	}

	// db.collection('Todos').insertOne({
	// 	text: 'Something good to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if(err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	db.collection('Users').insertOne({
		_id: 1,
		name: 'm lutfi',
		age: 23,
		location: 'Jakarta'
	}, (err, result) => {
		if(err) {
			return('Error:', err);
		}

		console.log(JSON.stringify(result.ops, undefined, 2));
	});

	//always use this to close connection
	db.close();
});