let images = [
    'images/library.jpg',
    'images/library1.jpg',
    'images/6.jpg'
];

let currentIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length; // Loop through images
}

// Change background every 5 seconds
setInterval(changeBackground, 5000);

// Set the initial background image
changeBackground();

// Add event listeners for navigation
document.getElementById('login-button').addEventListener('click', function () {
    window.location.href = 'login.html'; // Redirect to login page
});

document.getElementById('signup-button').addEventListener('click', function () {
    window.location.href = 'signup.html'; // Redirect to sign-up page
});
