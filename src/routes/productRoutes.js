const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Endpoint para cargar datos desde el archivo Excel
router.post('/loadFromExcel', productController.loadProductsFromExcel);

router.post('/', productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.put('/:id', productController.updateProductById);
router.delete('/:id', productController.deleteProductById);

module.exports = router;