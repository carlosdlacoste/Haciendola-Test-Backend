const pool = require('../utils/db');

class User {
    async authenticate(username, password) {
        try {
            const query = 'SELECT * FROM users WHERE username = $1 AND password = $2';
            const result = await pool.query(query, [username, password]);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }
}

module.exports = User;