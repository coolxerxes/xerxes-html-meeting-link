const sequelize = require('./init');
const { DataTypes } = require('sequelize');

const CategoryModel = sequelize.define('category', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  parentId: {
    type: DataTypes.INTEGER,
    field: 'parent_id',
    defaultValue: 0,
  },
});

module.exports = CategoryModel;