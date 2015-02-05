var express = require('express');
var models = require('../models');
var userDAO = {};

userDAO.getAllUsers = function(callback) {
	models.Student.findAll().then(function(users) {
		console.log('get list Users successful');
		var usersList = [];
		users.forEach(function(user) {
			usersList.push(user.dataValues);
		});
		callback(null, usersList);
	});
};

userDAO.createNewUser = function(user, callback) {
	models.Student.create(user).then(function(newUser) {
		console.log(newUser.dataValues);
		callback(null, newUser.dataValues);
	});
};

module.exports = userDAO;