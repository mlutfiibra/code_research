console.log('Starting app.js');

//Require let's us load in the module functionally so we can load it.

//FILE SYSTEM
//File I/O is provided by simple wrappers around standard POSIX functions. 
const fs = require('fs');

//The os module provides a number of operating system-related utility methods.
const os = require('os');
//load other files
//const notes = require('./notes.js');

//3rd party modules
const _ = require('lodash');

var user = os.userInfo();

//LODASH

//console.log(_.isString(true));
//console.log(_.isString('true'));

var filteredArray = _.uniq([2,1,'m lutfi','muhammad',2,2,7]);
console.log(filteredArray);

//fs.appendFile('greetings.txt', 'Hello world!');

//asynchronous methods
// fs.appendFile('greetings.txt', `Hello ${user.username}! your age are ${notes.age}`, function (err) {
// 	if (err) {
// 		console.log('Unable to write to file');
// 	}
// });

//synchronous methods
//fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);

//
//console.log(`${notes.add(-2,2)}`);