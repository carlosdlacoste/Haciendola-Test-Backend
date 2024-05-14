const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const Product = sequelize.define('Product', {
    handle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    sku: {
        type: DataTypes.STRING,
        allowNull: false
    },
    grams: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    compare_price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    barcode: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

module.exports = Product;