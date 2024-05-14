const pool = require('../utils/db');

class Product {
    async getAllProducts() {
        try {
            const query = 'SELECT * FROM products';
            const result = await pool.query(query);
            return result.rows;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Product;