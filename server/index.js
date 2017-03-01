var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var Booking = require('./models/booking');
var User   = require('./models/user');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/booking');

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.post('/api/booking', function(req, res){
	console.log('body', req.body);
	var booking = new Booking({
		species: req.body.species,
		numHunters: req.body.hunters, 
		start: req.body.start,
		end: req.body.end,
		lodging: req.body.lodging
	})
	booking.save(function(err, result){
		if(err){
			res.status(500)
			res.json(err)
		} else {
			res.send(result);
		}
	})
})
app.post('/api/user', function(req, res){
	console.log('body', req.body);
	var user = new User({
		username: req.body.username,
    	first: req.body.first,
        last: req.body.last,
        password: req.body.password, 
        email: req.body.email,
		phone: req.body.phone
})
	user.save(function(err, result){
		if(err){
			res.status(500)
			res.json(err)
		} else {
			res.send(result);
		}
	})
})


app.listen(3001)