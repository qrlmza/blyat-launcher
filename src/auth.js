// Module de gestion de l'authentification utilisateur
const pool = require('./db');
const bcrypt = require('bcrypt');

async function loginUser(username, password) {
    const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
    if (rows.length === 0) {
        return { success: false, message: 'Utilisateur non trouvé.' };
    }
    const user = rows[0];
    // Vérification sécurisée avec bcrypt
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return { success: false, message: 'Mot de passe incorrect.' };
    }
    return { success: true, user };
}

module.exports = { loginUser };
