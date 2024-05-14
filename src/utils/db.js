const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'postgres',
    database: 'haciendola-test-db',
    username: 'postgres',
    password: '1234',
    host: 'localhost',
    port: 5432,
});

module.exports = sequelize;