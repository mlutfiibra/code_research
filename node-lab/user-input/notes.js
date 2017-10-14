const fs = require('fs');

var fetchBooks = () => {
	try {
		//read the note
    	var readTemp = fs.readFileSync('notes-book.json');
    	return JSON.parse(readTemp);
    }catch (e){
    	return [];
    }
};

var saveBooks = (list) => {
	fs.writeFileSync('notes-book.json', JSON.stringify(list));
};

// make new object to store in notes-book.json as an String of JSON
var addNote = (title, body) => {
    //console.log(`Adding note ${title} : ${body}.`);
    var bookList = fetchBooks();
    var book = {
        title,
        body
    };

    //count duplicate array
	var duplicateBooks = bookList.filter((book) => book.title === title && book.body === body);

	// var duplicateBook = bookList.filter((note) => {
	// 	return note.title === title;
	// });

	if(duplicateBooks.length===0) {
    	bookList.push(book);
    	saveBooks(bookList);
    	return book;
	} else {
		console.log('The book already exist.');
	}
    
}

var getAll = () => {
    return fetchBooks();
};

var getNote = (title) => {
	var bookList = fetchBooks();
	var filteredBooks = bookList.filter((book) => book.title === title);

	return filteredBooks[0];
};

var removeNote = (title) => {
	var bookList = fetchBooks();
	var filteredBooks = bookList.filter((book) => book.title !== title);
	saveBooks(filteredBooks);

	return bookList.length !== filteredBooks.length;
};

var logBook = (book) => {
    console.log('---');
    console.log(`Title ${book.title} : ${book.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logBook
};