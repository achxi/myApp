var models  = require('../models');
var express = require('express');
var router = express.Router();
var userDAO = require('../dao/userDAO');

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

router.get('/', function(req, res, next) {
	console.log('list all users');
	userDAO.getAllUsers(function(err, users) {
		var printOut = {
			'users' : users
		};
		// res.send(printOut);
		res.render('users', {'users' : users});
		console.log(printOut);
	});
});

router.post('/create', function(req, res, next) {
	console.log('Create new user');
	console.log(req.body);
/*	var newUser = {
		username : 'ff8',
		food : 'monster',
		confirm : 'y',
		longtitude : 91,
		latitude : 54
	};*/
	var newUser = {
		username : req.body.username,
		food : 'monster',
		confirm : 'y',
		longtitude : req.body.longtitude,
		latitude : req.body.latitude
	};
	userDAO.createNewUser(newUser, function(err, newUser) {
		console.log(newUser);
		// res.redirect('/users');
		res.redirect('/leaflet');
	});
});

module.exports = router;
