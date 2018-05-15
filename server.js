// MEAN Stack RESTful API Tutorial - Contact List App

var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('reiseblogdata', ['reiseblogdata']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/reiseblogdata', function (req, res) {
  console.log('I received a GET request');

  db.reiseblogdata.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

app.post('/reiseblogdata', function (req, res) {
  console.log(req.body);
  db.reiseblogdata.insert(req.body, function(err, doc) {
    res.json(doc);
  });
});

app.delete('/reiseblogdata/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.reiseblogdata.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.get('/reiseblogdata/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.reiseblogdata.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.put('/reiseblogdata/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.name);
  db.reiseblogdata.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});

app.listen(3000);
console.log("Server running on port 3000");
