const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');
// const bcrypt = require('bcrypt');

const User = sequelize.define('User', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo_electronico: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

User.prototype.validPassword = function(password) {
    return this.password === password;
};

module.exports = User;