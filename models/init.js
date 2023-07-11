const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './data.db'
});

async function authenticate() {
  try {
    await sequelize.authenticate();
    await sequelize
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

async function synchronizeDatabase() {
  try {
    await sequelize.sync({ force: false }); // Use { force: true } to drop existing tables and recreate them
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing the database:', error);
  }
}

authenticate()

module.exports = sequelize;