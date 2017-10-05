const REQUEST = require('request');
const KEY = 'c5af81bb64433b5752b439bf85bffe78';

var getWeather = (latitude, longitude, callback) => {
	REQUEST({
		url: `https://api.darksky.net/forecast/${KEY}/${latitude},${longitude}`,
		json: true
	}, (error, response, body) => {
		if(!error && response.statusCode === 200) {
			callback(undefined, { 
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
		});
		}else {
			callback(`ERROR: ${error}`);
		} 
	});
};

module.exports.getWeather = getWeather;