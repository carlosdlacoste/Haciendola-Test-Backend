const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Endpoint para crear un nuevo usuario
router.post('/', UserController.createUser);

// Endpoint para obtener todos los usuarios
router.get('/', UserController.getAllUsers);

// Endpoint para obtener un usuario por su ID
router.get('/:id', UserController.getUserById);

// Endpoint para eliminar un usuario por su ID
router.delete('/:id', UserController.deleteUserById);

module.exports = router;