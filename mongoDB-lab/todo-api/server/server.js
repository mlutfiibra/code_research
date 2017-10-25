//Library import
var express = require('express');
//Convert body JSON to object
var bodyParser = require('body-parser');

//Local import
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

//add express lib as web framework
var app = express();

app.use(bodyParser.json());

//Add express post request
app.post('/todos',( req, res ) => {
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

//Add express get request
app.get('/todos',( req, res ) => {
	Todo.find().then((todos) => {
		res.send({todos});
	}, (e) => {
		res.status(400).send(e);
	});
});

app.listen( 3000, () => {
	console.log('Started on port 3000');
} );

module.exports = {app};