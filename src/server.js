const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const app = express();
const PORT = process.env.PORT || 3000;
const sequelize = require('./utils/db');
const User = require('./models/user');
const Product = require('./models/product');

sequelize.sync({ force: false }).then(() => {
    console.log('Base de datos sincronizada!');
    }).catch(err => {
        console.error('Error al sincronizar tablas:', err);
});

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});