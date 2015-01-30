"use strict";

module.exports = function(sequelize, DataTypes) {
  var Mew = sequelize.define("Mew", {
    food: DataTypes.STRING,
    confirm: DataTypes.STRING
  });

  return Mew;
};
