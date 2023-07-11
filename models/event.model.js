const sequelize = require('./init');
const { DataTypes } = require('sequelize');

const EventModel = sequelize.define('event', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  categoryId: {
    type: DataTypes.NUMBER,
    field: 'category_id',
  },
  directCategoryId: {
    type: DataTypes.NUMBER,
    defaultValue: 0,
    field: 'direct_category_id',
  }
});

module.exports = EventModel;