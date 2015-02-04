var express = require('express');
var router = express.Router();
var models  = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('combine');
});
router.post('/create', function(req, res, next) {
  studentName = req.param('firstName') + ' ' + req.param('lastName');
  console.log(req.body);
  models.Student.create({
    'username': studentName,
    'food' : 'myFood',
    'confirm' : 'myConfirm',
    'longtitude': req.param('long'),
    'latitude': req.param('lat')
  }).then(function(obj) {
    console.log(obj);
    res.redirect('/combine');
  });
});

router.get('/delete', function(req, res) {
  model.Student.find({
    where: { id: req.param('id') }
  });
});

module.exports = router;