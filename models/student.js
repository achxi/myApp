"use strict";

module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define("Student", {
    username: DataTypes.STRING,
    food: DataTypes.STRING,
    confirm: DataTypes.STRING,
    longtitude: DataTypes.INTEGER,
    latitude: DataTypes.INTEGER
  });

  return Student;
};
