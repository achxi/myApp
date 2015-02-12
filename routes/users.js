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
	var newUser = {
		username : 'hih',
		food : 'myFood',
		confirm : 'myConfirm',
		longtitude : '15.5',
		latittude : '2.8'
	};
	userDAO.createNewUser(newUser, function(err, newUser) {
		console.log(newUser);
		res.redirect('/users');
	});
});

module.exports = router;
