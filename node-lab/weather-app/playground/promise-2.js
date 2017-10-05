//RUN WITH node playground/promise-2.js

const REQUEST = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        let encodedAddress = encodeURIComponent(address);

        REQUEST({
            url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable connect to Google APIs');
                //callback('Unable connect to Google APIs');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find that address!');
            }
            else if (body.status === 'OK') {
                //console.log(JSON.stringify(body, undefined, 2)); //takes JSON object to String (argument, fill out prop, space use)
                resolve({
                    address: body.results[0].formatted_address,
                    longitude: body.results[0].geometry.location.lng,
                    latitude: body.results[0].geometry.location.lat
                });
            }
        });
    });
};

//PROMISE HANDLER TO PRINT MESSAGE
geocodeAddress('14235').then((location) => {
    //things goes well. RESOLVE
    console.log(`The Address:\n ${JSON.stringify(location, undefined, 2)}`);
}, (errorMessage) => {
    //things goes wrong. REJECT
    console.log(`The error: ${errorMessage}`);
});