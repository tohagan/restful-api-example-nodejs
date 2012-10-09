var config = require(__dirname + '/../config/config.json');
var Sequelize = require('sequelize');
var sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.port,
  logging: false,
  pool: { maxConnections: 15, maxIdleTime: 30}
});

var models = {
  users: sequelize.import(__dirname + '/../models/user')
};

sequelize.sync();
module.exports = models;
