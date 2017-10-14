//node server.js -e js,hbs

const EXPRESS = require('express');
const HBS = require('hbs');
const FS = require('fs');
const PORT = process.env.PORT || 3000;

var app = EXPRESS();

HBS.registerPartials(__dirname  + '/views/partials');
app.set('view engine', 'hbs'); //hbs,ejs, html

//middleware-next
app.use((req, res, next) =>{
	let now = new Date().toString();
	let log = `${now}: ${req.method} ${req.url}`;

	console.log(log);
	//write log to file
	FS.appendFile('server.log', log + '\n', (err) => {
		if (err) {
			console.log('Unable to append to server.log.', err);
		}
	});
	next(); //use to tell express MIDDLEWARE is done
});

// app.use((req, res, next) => {
// 	res.render('maintenance');
// });

app.use(EXPRESS.static(__dirname + '/public')); //static use for project that not require a backend

HBS.registerHelper('getCurrentYear', () =>{
	return new Date().getFullYear(); //footer.hbs
});

HBS.registerHelper('upperCase', (text) => {
	return text.toUpperCase();
});

//set up http get request event handler
app.get('/', (req, res) => {
	//send data by http
	//res.send('<h1>Hello Express!</h1>');
	res.render('home', {
		pageTitle : 'Home', //header.hbs
		welcomeMessage : 'Welcome to My Express!' //home.hbs
	})
});

app.get('/about', (req, res) => {
	//render file by view engine
	res.render('about', { 
		pageTitle: 'About Page' //about.hbs
	});
	//res.send('About page');
});

app.get( '/projects', (req, res) => {
	res.render('projects.hbs' , {
		pageTitle: "Projects"
	});
});

app.get('/bad', (req, res) => {
	res.send({
		errorMessage : 'Unable to handle request'
	})
});

//templating engine let you render page in dynamic way


//set PORT
app.listen(PORT, () => {
	console.log(`Server is up on port ${PORT}.`);
});