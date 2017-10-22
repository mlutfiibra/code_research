//Library import
var express = require('express');
//Convert body JSON to object
var bodyParser = require('body-parser');

//Local import
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res) => {
	//create document object
	var todo = new Todo({
		text: req.body.text
	});
	//save to database
	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});

app.listen(3000, () => {
	console.log('Started on port 3000');
});


// MONGO THINGS

// var newTodo = new Todo({
// 	text: 'Now',
// 	completed : false,
// 	completedAt : 0
// 	// other props
// });

// var user = new Users({
// 	email: 'mlutfiibra@outlook.com'
// });  

// newTodo.save().then((doc) => {
// 	console.log('Saved todo', JSON.stringify(doc, undefined, 2));
// }, (e) => {
// 	console.log(`Error: ${e}`);
// });

// user.save().then((doc) => {
// 	console.log('Saved todo', JSON.stringify(doc, undefined, 2));
// }, (e) => {
// 	console.log(`Error: ${e}`);
// });

