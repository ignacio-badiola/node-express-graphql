const Sequelize = require('sequelize');
const configs = require('../configs');

const sequelize = new Sequelize(configs.db.name, configs.db.user, configs.db.pwd, {
  dialect: 'mysql',
  host:  configs.db.host
});

module.exports = sequelize;
