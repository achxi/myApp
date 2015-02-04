"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    // add altering commands here, calling 'done' when finished
    migration.addColumn(
	  'Students',
	  'longtitude',
	  {
	    type: DataTypes.INTEGER,
	    allowNull: true
	  }
	);
    migration.addColumn(
	  'Students',
	  'latitude',
	  {
	    type: DataTypes.INTEGER,
	    allowNull: true
	  }
	);
    done();
  },

  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    migration.removeColumn('Student', 'longtitude');
    migration.removeColumn('Student', 'latitude');
    done();
  }
};
