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