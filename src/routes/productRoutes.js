const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Endpoint para cargar datos desde el archivo Excel
router.post('/loadFromExcel', productController.loadProductsFromExcel);

router.get('/', productController.getAllProducts);

module.exports = router;