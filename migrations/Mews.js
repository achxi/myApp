/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Mews', { 
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    food: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    confirm: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    }
  });
};
