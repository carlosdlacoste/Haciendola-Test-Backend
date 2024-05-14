const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.authenticateUser = async (req, res) => {
    const { username, password } = req.body;

    try {
      // Buscar al usuario en la base de datos
        const user = await User.findOne({ where: { username } });

        // Verificar si el usuario existe y la contraseña es correcta
        if (!user || !(await user.validPassword(password))) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Generar token de autenticación solo si la contraseña es correcta
        const token = jwt.sign({ userId: user.id }, 'secretKey', { expiresIn: '1h' });

        const userWithoutPassword = {
            id: user.id,
            name: user.nombre,
            email: user.correo_electronico,
            username: user.username
        }

        res.json({ token, user: userWithoutPassword });
    } catch (error) {
        console.error('Error authenticating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};