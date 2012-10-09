module.exports = {
  up: function(migration, DataTypes) {
    migration.addColumn('users', 'email', DataTypes.STRING);
  },
  down: function(migration) {
    migration.removeColumn('users', 'email');
  }
}