const REQUEST = require('request');
const yargs = require('yargs');

var geocodeAddress = (address,callback) => {
	let encodedAddress = encodeURIComponent(address);

	console.log(`URI: ${encodedAddress}`);

	REQUEST({
		url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
		json: true
	}, (error, response, body) => {
		if(error) {
			callback('Unable connect to Google APIs');
		}else if (body.status === 'ZERO_RESULTS'){
			callback('Unable to find that address!');
		}if(body.status==='OK') {
			//console.log(JSON.stringify(body, undefined, 2)); //takes JSON object to String (argument, fill out prop, space use)
			callback(undefined, {
				address: body.results[0].formatted_address,
				longitude: body.results[0].geometry.location.lng,
				latitude: body.results[0].geometry.location.lat
			});
		}		
	});
};

module.exports.geocodeAddress = geocodeAddress;