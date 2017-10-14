const REQUEST = require('supertest');
const EXPECT = require('expect');

var app = require('./server').app;

it('should return hello world response', (done) => {
	REQUEST(app)
		.get('/')
		.expect(404)
		.expect('Hello world!')
		.end(done);
});

it('should return my user object', (done) =>{
	REQUEST(app)
		.get('/users')
		.expect(200)
		.expect((res) => {
			EXPECT(res.body).toInclude({
				name: 'Harry',
				age: 27
			});
		})
		.end(done);
});