const User = require('../models/user');

exports.authenticateUser = async (req, res) => {
    const { username, password } = req.body;
    const user = new User();
    try {
        const authenticatedUser = await user.authenticate(username, password);
        if (authenticatedUser) {
            res.json({ message: 'Authentication successful', user: authenticatedUser });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error authenticating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};