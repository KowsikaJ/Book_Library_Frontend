// Session check: redirect to login if not logged in
document.addEventListener('DOMContentLoaded', function () {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) {
        alert('You are not logged in. Redirecting to login...');
        window.location.href = 'login.html';
    }
});

// Logout functionality
document.getElementById('logout-button').addEventListener('click', function () {
    localStorage.removeItem('loggedInUser'); // Clear session data
    alert('You have been logged out.');
    window.location.href = 'index.html'; // Redirect to splash screen
});

// Search functionality
document.querySelector('.search-bar button').addEventListener('click', function () {
    const searchTerm = document.querySelector('.search-bar input').value.toLowerCase();
    const allBooks = document.querySelectorAll('.book-card, .carousel-item'); // Include both featured and new arrivals

    let foundAny = false;
    allBooks.forEach(book => {
        const titleElement = book.querySelector('h3');
        if (titleElement) {
            const title = titleElement.textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                book.style.display = 'block'; // Show book if it matches search term
                foundAny = true;
            } else {
                book.style.display = 'none'; // Hide book if it doesn't match
            }
        }
    });

    if (!foundAny) {
        alert('No books found for the search term: ' + searchTerm);
    }
});

// "Buy Now" button functionality
document.querySelectorAll('.book-card button').forEach(button => {
    button.addEventListener('click', function () {
        const bookCard = button.closest('.book-card');
        const title = bookCard.querySelector('h3').textContent;
        const author = bookCard.querySelector('p').textContent.replace('Author: ', '');
        const imageSrc = bookCard.querySelector('img').src;

        // Redirect to payment page with book details in URL
        window.location.href = `payment.html?title=${encodeURIComponent(title)}&author=${encodeURIComponent(author)}&image=${encodeURIComponent(imageSrc)}`;
    });
});
