const { DataTypes } = require('sequelize');
const sequelize = require('../db/dbConfig');

const Vehicle = sequelize.define('Vehicle', {
  registrationNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vehicleType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});


sequelize.sync();

module.exports = Vehicle;
