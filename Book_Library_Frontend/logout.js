// Check if the user is logged in; if not, redirect to login page
if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'login.html';
}

// Logout functionality
document.getElementById('logout-button').addEventListener('click', function () {
    // Remove user session data from localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');

    // Redirect to splash screen (index.html)
    window.location.href = 'index.html';
});
