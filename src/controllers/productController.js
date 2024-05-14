const Product = require('../models/product');
const loadExcelData = require('../utils/excelParser');

exports.loadProductsFromExcel = async (req, res) => {
    try {
      // Ruta al archivo Excel
        const filePath = 'Productos prueba técnica.xlsx';
        // Cargar datos desde el archivo Excel
        const excelData = loadExcelData(filePath);
        // Procesar los datos y guardar en la base de datos
        // Por ejemplo, puedes iterar sobre los datos y crear productos en la base de datos
        for (const row of excelData) {
            await Product.create({
            // Asigna los valores de cada fila a las columnas de tu tabla de productos
            handle: row[0],
            title: row[1],
            descripcion: row[2],
            sku: row[3],
            grams: row[4],
            stock: row[5],
            price: row[6],
            compare_price: row[7],
            barcode: row[8]
            });
        }
        res.json({ message: 'Data loaded successfully' });
    } catch (error) {
        console.error('Error loading data from Excel:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Crear un nuevo producto
exports.createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

  // Obtener todos los productos
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

  // Obtener un producto por ID
exports.getProductById = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await Product.findByPk(productId);
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.json(product);
        }
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

  // Actualizar un producto por ID
exports.updateProductById = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await Product.findByPk(productId);
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            await product.update(req.body);
            res.json(product);
        }
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

  // Eliminar un producto por ID
exports.deleteProductById = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await Product.findByPk(productId);
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            await product.destroy();
            res.json({ message: 'Product deleted successfully' });
        }
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};