const Sequelize = require('sequelize');

const sequelize = new Sequelize('tennisDB', 'tennisMaster', 'tennisMasterPwd', {
  host: 'tennisdbid.cpbhtf5bcxzm.us-east-1.rds.amazonaws.com',
  dialect: 'postgres',
  operatorsAliases: false,
  logging: false,
  define: {
    timestamps: true
} 
});


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });





module.exports = sequelize;