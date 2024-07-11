document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get username and password values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simulated checking with hardcoded accounts (replace with actual backend logic)
    var accounts = [
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' },
    ];

    // Check if username and password match any account
    var authenticated = false;
    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i].username === username && accounts[i].password === password) {
            authenticated = true;
            break;
        }
    }

    if (authenticated) {
        // Successful login - redirect or show success message
        alert('Login successful!');
        // You can redirect the user to another page here
        resetForm();
    } else {
        // Display error message
        var errorMessage = document.getElementById('error-msg');
        errorMessage.textContent = 'Invalid username or password. Please try again.';
    }
});

function resetForm() {
    // Reset form fields and error message
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('error-msg').textContent = '';
}
