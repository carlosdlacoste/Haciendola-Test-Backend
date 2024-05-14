const xlsx = require('xlsx');

// Función para cargar datos desde el archivo Excel
const loadExcelData = (filePath) => {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet, { header: 1, range: 1, blankrows: false });

    return data;
};

module.exports = loadExcelData;