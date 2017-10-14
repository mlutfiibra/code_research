// server.js
// load the things we need

var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var friends = ["Tony","Miranda","Justin"];

//set the view engine to ejs
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));

//use res.render to load up an ejs view file

app.get("/", function(req, res) {
	res.send("Welcome to the Home Page");
});

//app.get(route_name)
app.get("/friends", function(req,res) {
	//RENDER FILES TO WEB SERVER
	res.render("pages/friends", {friends:friends}); // {view: local}
});


app.get("/speak/:animals/sound/:count", function(req, res) {
	var animals = req.params.animals.toLowerCase();
	var count = req.params.count;
	
	var sound = "";

/*	if(animals === 'dog') {
		res.send("Woof woof!");
	} else if (animals === 'dog') {
		res.send("Oink!");
	} else if (animals === 'bird') {
		res.send("Chirp~");
	}*/

	res.send("Animals "+ animals+" count "+count);	
});


app.get("*", function(req, res) {
	res.send("rly?");
});

//POST
app.post("/addfriends", function(req, res) {
	var newFriend = req.body.friendName;
	friends.push(newFriend);
	res.redirect("/friends");
});

app.listen(3000, function() {
	console.log("The server start!");
});