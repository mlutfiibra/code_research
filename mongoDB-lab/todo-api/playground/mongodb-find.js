//follow the MongoDB API documentation 
//const MONGO_CLIENT = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//callback url
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').find({
	// 	_id: new ObjectID('59e21ba054fecf65d4e06b8e')
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	db.collection('Users').find({
		name: 'm lutfi'
	}).toArray().then((docs) => {
		console.log('The users ur looking for: ');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});

	//find ObjectID use find({_id: new ObjectID('4681272gd671'}))
	//or ({completed:false})

	//always use this to close connection
	//db.close();
});