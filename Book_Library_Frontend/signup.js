document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Check if email already exists in localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.some((user) => user.email === email);

    if (userExists) {
        alert('Email already registered. Please log in.');
        return;
    }

    // Store new user in localStorage
    existingUsers.push({ email, password });
    localStorage.setItem('users', JSON.stringify(existingUsers));

    alert('Sign-up successful! Redirecting to login page...');
    window.location.href = 'login.html';
});
