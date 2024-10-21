const { DataTypes } = require('sequelize');
const sequelize = require('../db/dbConfig');

const Device = sequelize.define('Device', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  serialNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ipAddress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['active', 'inactive']],
    }
  }
});

sequelize.sync();  // Sync the model with the database
module.exports = Device;
