// Script de gestion du formulaire de connexion
const { loginUser } = require('../auth');

window.addEventListener('DOMContentLoaded', () => {
    // Gestion du logout si bouton présent
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('blyat_user');
            window.location.href = './login.html';
        });
    }

    const form = document.getElementById('login-form');
    const errorDiv = document.getElementById('login-error');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const result = await loginUser(username, password);
            if (result.success) {
                // Stocker l'utilisateur dans le localStorage
                localStorage.setItem('blyat_user', JSON.stringify(result.user));
                // Rediriger vers la page d'accueil ou dashboard
                window.location.href = './index.html';
            } else {
                errorDiv.textContent = result.message;
                errorDiv.style.display = 'block';
            }
        });
    }
});
