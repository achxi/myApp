"use strict";

module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define("Student", {
    username: DataTypes.STRING
  });

  return Student;
};
