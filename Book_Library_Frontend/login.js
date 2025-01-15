document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Retrieve users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if credentials match any stored user
    const validUser = existingUsers.find((user) => user.email === email && user.password === password);

    if (validUser) {
        alert('Login successful!');
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});
