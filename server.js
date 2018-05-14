var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs ('reiseblog', ['reiseblog']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/reiseblog', function (req, res){
	console.log("I received a GET request")



db.reiseblog.find(function (err, docs){
	console.log(docs);
	res.json(docs);
});

});

app.post('/reiseblog', function (req, res){
	console.log(req.body);
	db.reiseblog.insert(req.body, function (err, doc){

		res.json(doc);

	});
});

app.listen(3000);
console.log("Yes ! Server running on Port 3000");

   