"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    // add altering commands here, calling 'done' when finished
    migration.addColumn(
	  'Students',
	  'food',
	  {
	    type: DataTypes.STRING,
	    allowNull: true
	  }
	);
    migration.addColumn(
	  'Students',
	  'confirm',
	  {
	    type: DataTypes.STRING,
	    allowNull: true
	  }
	);
    done();
  },

  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    migration.removeColumn('Student', 'food');
    migration.removeColumn('Student', 'confirm');
    done();
  }
};
