var express = require('express');
var app = express();

app.get('/', function (req, res){
	res.send("Hello World bljed")
});

app.listen(3000);
console.log("Server running");

