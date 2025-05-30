// Gestion de la session utilisateur (stockage local)
function isLoggedIn() {
    return !!localStorage.getItem('blyat_user');
}

function requireAuth() {
    if (!isLoggedIn()) {
        window.location.href = './login.html';
    }
}

function logout() {
    localStorage.removeItem('blyat_user');
    window.location.href = './login.html';
}

window.requireAuth = requireAuth;
window.logout = logout;
window.isLoggedIn = isLoggedIn;
