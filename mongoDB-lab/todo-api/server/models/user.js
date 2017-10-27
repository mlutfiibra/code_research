var mongoose = require('mongoose');

var User = mongoose.model('Users', {
	name: {
		type: String,
		required: true,
		trim: true
	}
});

module.exports = {User};