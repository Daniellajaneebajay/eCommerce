/* LOG-IN */

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
        });
    }

    const form = document.getElementById('login-form');
    const messageDiv = document.getElementById('message');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the default form submission

            // Validation
            const username = form.querySelector('input[placeholder="Username"]').value;
            const password = form.querySelector('input[placeholder="Password"]').value;

            if (username && password) {
                // Show success message
                messageDiv.textContent = 'Login successful!';
                messageDiv.style.color = 'white';

                // Redirect to another page after 2 seconds
                setTimeout(() => {
                    window.location.href = 'home.html'; // Replace with your desired page URL
                }, 2000);
            } else {
                // Show error message
                messageDiv.textContent = 'Login unsuccessful. Please fill in all required fields.';
                messageDiv.style.color = 'red';
            }
        });
    } else {
        console.error('Login form element not found');
    }
});
