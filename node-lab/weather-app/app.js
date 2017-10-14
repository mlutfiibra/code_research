// node app.js -a '1301 lombard street'
// node app.js -a 08822

const yargs = require('yargs');
const geocode = require('./geocode/geocode');

const WEATHER_JS = require('./weather/weather');

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
	.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
	if(errorMessage) {
		console.log(errorMessage);
	} else {
		console.log(results.address);
		WEATHER_JS.getWeather(results.latitude, results.longitude, (weatherResults, errorMessage) => {
			if(errorMessage) {
				console.log(errorMessage);
			}else {
				console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
				//console.log(JSON.stringify(weatherResults, undefined, 2));
			}
		});
	}
});