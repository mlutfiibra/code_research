const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '59edf732e66fac30c41719f4';

Todo.find({
	_id:id
}).then((todos) => {
	console.log('Todos: ', todos);
});

Todo.findById(id).then((todo) => {
	if(!todo) {
		return console.log('Id not found');
	}
	console.log('Todo by Id', todo);
}).catch((e) => console.log(e));

User.findById('59e222f754fecf65d4e06d4f').then((user) => {
	console.log('Users: ', user);
}, (err) => {
	console.log(err);
});