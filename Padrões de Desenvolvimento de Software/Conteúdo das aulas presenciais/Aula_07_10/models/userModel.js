const { DataTypes } = require('sequelize');
const db = require('../db');


const User = db.define('User', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


module.exports = User;
