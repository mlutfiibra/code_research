const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

//midleware
var app = express();

//Serving static files in express (in the public directory)
app.use(express.static(publicPath));

app.listen(port,() => {
	console.log(`Server is up on port ${port}`)
});