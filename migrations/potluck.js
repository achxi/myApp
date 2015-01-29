/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('potluck', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    food: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    confirm: {
      type: 'CHARACTER',
      allowNull: true,
    },
    signup_date: {
      type: DataTypes.DATE,
      allowNull: true,
    }
  });
};
