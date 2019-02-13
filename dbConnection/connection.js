const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.MSSQL_DB, process.env.MSSQL_USER, process.env.MSSQL_PASSWORD, {
  dialect: 'mssql',
  host: process.env.MSSQL_HOST,
  operatorsAliases: false,
  dialectOptions: {
    encrypt: true
  },
  logging: false,
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = sequelize;