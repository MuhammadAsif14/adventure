document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password.');
    }
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Signup successful! You can now log in.');

        // Show login form and hide signup form
        document.getElementById('signupForm').classList.add('hidden');
        document.getElementById('loginForm').classList.remove('hidden');
    } else {
        alert('Please enter both username and password.');
    }
});

document.getElementById('showSignup').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('signupForm').classList.remove('hidden');
});

document.getElementById('showLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signupForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
});
