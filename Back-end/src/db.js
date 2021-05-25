const Sequelize = require("sequelize");
const config = require("./config.json");
const { host, dialect, user, password, database, logging } = config;
const sequelize = new Sequelize(database, user, password, {
  dialect,
  host,
  logging,
});

module.exports = sequelize;
