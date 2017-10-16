//mongod.exe --dbpath /Users/ml/mongo-data

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
	
	/*
	**Function for delete document in MongoDB
	**
	*/

	//deleteMany - delete doc that have multiple value
	// db.collection('Todos').deleteMany({text: 'watch a movie'}).then((result) => {
	// 	console.log(result);
	// });

	//deleteOne - delete first records matched
	// db.collection('Todos').deleteOne({text: 'Read horoscope'}).then((result) => {
	// 	console.log(result);
	// });

	// findOneAndDelete - show the records deleted and delete that records
	// db.collection('Todos').findOneAndDelete({text: 'Read horoscope'}).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndDelete(
		{
			_id: new ObjectID('59e52e942fa6bd76a8abcbb3')
		}).then((result) => {
			console.log( JSON.stringify(result, undefined, 2) );
		}
	);
	
	//db.close();
});