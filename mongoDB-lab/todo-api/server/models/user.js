var mongoose = require('mongoose');

var Users = mongoose.model('Users', {
	text: {
		type: String,
		required: true,
		trim: true
	}
});

module.exports = {Users};