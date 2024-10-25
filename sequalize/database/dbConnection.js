
const Sequelize = require('sequelize');

const sqlConnection = new Sequelize(
    process.env.DATABASE, 
    process.env.USER, 
    process.env.PASSWORD, {
        dialect: 'mysql',
        host: process.env.HOST || 'localhost'
    }
);

module.exports = sqlConnection;