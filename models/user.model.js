const sequelize = require('./init');
const { DataTypes } = require('sequelize');

const UserModel = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  type: {
    type: DataTypes.STRING
  }
});

module.exports = UserModel;