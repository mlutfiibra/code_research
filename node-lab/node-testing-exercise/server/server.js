const EXPRESS = require('express');

var app = EXPRESS();

app.get('/', (req, res) => {
	res.status(404).send('Hello world!');
});

//set end point to users
app.get('/users', (req, res) => {
	res.send([{
		name: 'lutfi',
		age:23		
	},
	{
		name: 'Hugo',
		age: 22
	},
	{
		name: 'Harry',
		age: 27
	}]);
});

app.listen(3000);

module.exports.app = app;