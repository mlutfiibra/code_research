const EXPECT = require('expect');
const REQUEST = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

//run before every test case
beforeEach((done) => {
	Todo.remove({}).then(() => done());
});

describe('POST /todos', () => {
	it('should create a new todo', (done) => {
		let text = 'Todo text';

		REQUEST(app)
			.post('/todos')
			.send({text})
			.expect(200)
			.expect((res) => {
				EXPECT(res.body.text).toBe(text);
			})
			.end((err, res) => {
				if(err) {
					return done(err);
				}

				Todo.find().then((todos) => {
					EXPECT(todos.length).toBe(1);
					EXPECT(todos[0].text).toBe(text);
					done();
				}).catch((err) => done(err));
			});
	});

	it('should not create todo with invalid body data', (done) => {
		//let text = '';

		REQUEST(app)
			.post('/todos')
			.send({})
			.expect(400)
			// .expect((res) => {
			// 	EXPECT(res.body.text).toBe(text);
			// })
			.end((err, res) => {
				if(err) {
					return done(err);
				}

				Todo.find().then((todos) => {
					EXPECT(todos.length).toBe(0);
					done();
				}).catch((err) => done(err));
			});
	});
});