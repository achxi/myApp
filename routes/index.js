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
  res.render('postgres', { title: 'postgres + ejs page!' })
});*/

/*router.get('/postgres', function(req, res) {
  models.User.findAll({
    include: [ models.Task ]
  }).then(function(users) {
    res.render('postgres', {
      title: 'Postgres is here',
      users: users
    });
  });
});*/

router.get('/postgres', function(req, res) {
  models.Student.findAll().then(function(users) {
    res.render('postgres', {
      title: 'Postgres is here',
      users: users
    });
  });
});


router.post('/postgres/create', function(req, res) {
  models.Student.create({
    username: req.param('student_name')
  }).then(function() {
    res.redirect('/postgres');
  });
});

router.get('/postgres/delete/:id', function(req, res) {
  models.Student.find({
    where: {id: req.param('id')}
  }).then(function(mem) {
    models.Student.destroy({
      where: {id: mem.id }
    }).then(function() {
      res.redirect('/postgres');
    });
  });
});

router.get('/postgres/update/:id', function(req, res) {
  models.Student.update({
    username: req.query.updateName
  }, {
    where: {
      id: req.param('id')
    }
  }).then(function() {
    res.redirect('/postgres');
  });
});

module.exports = router;