//change object person to JSON String

const fs = require('fs');

var person = {
	name: "m lutfi",
	age: 25 
};

//turn object into JSON string
var stringObj = JSON.stringify(person);
console.log(typeof stringObj); //String
console.log(stringObj);

//write the note
fs.writeFileSync('notes.json', stringObj);

//read the note
var noteString = fs.readFileSync('notes.json');
//turn JSON string into object
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.name);