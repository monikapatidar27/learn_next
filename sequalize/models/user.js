// user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/dbConnection');

const User = sequelize.define('User', {
    user_id: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        allowNull: false,  
        primaryKey: true 
    }, 
    name: { 
        type: DataTypes.STRING, 
        allowNull: false 
    }, 
    email: { 
        type: DataTypes.STRING, 
        allowNull: false 
    }, 
    createdAt: DataTypes.DATE, 
    updatedAt: DataTypes.DATE
});

module.exports = User;
