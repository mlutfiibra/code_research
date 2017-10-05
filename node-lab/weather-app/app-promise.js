const yargs = require('yargs');
const axios = require('axios');
const KEY = 'c5af81bb64433b5752b439bf85bffe78';

const argv = yargs
	//exports required arguments
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv

var encodedAddress = encodeURIComponent(argv.address);
var geocodeURL = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

//node app-promise.js -a '1301 lombard street philadelphia'
axios.get(geocodeURL).then((response) => {
	if(response.data.status === 'ZERO_RESULTS') {
		throw new Error('Unable to find that address');
	}
	//if Error thrown the code bellow will not be printed
	let lat = response.data.results[0].geometry.location.lat;
	let lng = response.data.results[0].geometry.location.lng;
	let weatherUrl = `https://api.darksky.net/forecast/${KEY}/${lat},${lng}`;
	
	console.log(response.data.results[0].formatted_address);

	return axios.get(weatherUrl);
}).then((response) =>{
	//if things goes well
	var temperature = response.data.currently.temperature;
	var apparentTemperature = response.data.currently.apparentTemperature;
	console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
}).catch((e) => {
	//if things goes wrong
	if(e.code === "ENOTFOUND") {
		console.log('Unable to connect to API servers.')
	}else {
		console.log(e.message); //Unable to find that address
	}
	
});