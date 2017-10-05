console.log('the app.js starts! \n');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const bookTitle = { 
	describe: 'Title of note',
	demand: true,
	alias: 't'
};

const bookBody = { 
	describe: 'Body of note',
	demand: true,
	alias: 'b'
};

const argv = yargs
	.command('add', 'Add a new book!', {
		title : bookTitle,
		body : bookBody
	})
	.command('list', 'List all books')
	.command('read', 'Read a book', {
		title : bookTitle
	})
	.command('remove', 'Remove a book', {
		title : bookTitle
	})
	.help()
	.argv;

const noteFile = require('./notes.js');

//var command = process.argv[2];
var command = argv._[0];
// console.log("Command:", command);
// console.log('yargs: ', argv);

//title body -> string to JSON -> save to file

if (command === 'add') {
    //node app.js add --title "harry potter" --body "chamber of secret"
    var status = noteFile.addNote(argv.title, argv.body);

    if (status) {
        console.log('Yeay! Note writen!');
        noteFile.logBook(status);
    } else {
        console.log('Duh.. The tittle or body already taken!');
    }
} else if (command === 'list') {
    var allBooks = noteFile.getAll();
	console.log(`Printing ${allBooks.length} note(s).`);
	allBooks.forEach((book) => noteFile.logBook(book));
} else if (command === 'read') {
    //node app.js read --books "harry potter" --rating "awesome"
    var read = noteFile.getNote(argv.title);
    
    if(read.length===0) {
    	console.log('Book not found');
    }else {
    	console.log(`The books found!`);
    	noteFile.logBook(read);
    }
} else if (command === 'remove') {
    var statusDelete = noteFile.removeNote(argv.title);
    var message = statusDelete ? 'book was removed' : 'try again!';
    console.log(message);
} else {
    console.log('Command not recognized');
}