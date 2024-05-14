const Product = require('../models/product');

exports.getAllProducts = async (req, res) => {
    const product = new Product();
    try {
        const products = await product.getAllProducts();
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};