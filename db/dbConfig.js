const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('anpr', 'admin', 'Apekid123', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

module.exports = sequelize;
