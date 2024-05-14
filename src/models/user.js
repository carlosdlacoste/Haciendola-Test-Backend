const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');
const bcrypt = require('bcrypt');

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

User.beforeCreate(async (user) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    user.password = hashedPassword;
});

  // Método para verificar la contraseña del usuario
User.prototype.validPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = User;