var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.User.findAll({
    include: [ models.Task ]
  }).then(function(users) {
    res.render('index', {
      title: 'Express',
      users: users
    });
  });
});

/*router.get('/postgres', function(req, res) {  
  res.render('postgres.ejs', { title: 'postgres + ejs page!' })
});*/

router.get('/postgres', function(req, res) {
	models.User.findAll({
	  include: [ models.Potluck ]
  	}).then(function(users) {
    
    res.render('postgres.ejs', { title: 'postgres + ejs page!',
		potluck: ['1', '2', '3'],
		users: users
		// items: potluck.all()
	});
 });
});

module.exports = router;