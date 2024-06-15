/* SIGN-UP */

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
        });
    }

    const form = document.getElementById('sign-up-form');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Validation
        const firstName = form.querySelector('input[placeholder="First Name"]').value;
        const lastName = form.querySelector('input[placeholder="Last Name"]').value;
        const email = form.querySelector('input[placeholder="Email"]').value;
        const contactNumber = form.querySelector('input[placeholder="Contact Number"]').value;
        const street = form.querySelector('input[placeholder="Street"]').value;
        const barangay = form.querySelector('input[placeholder="Barangay"]').value;
        const city = form.querySelector('input[placeholder="City"]').value;
        const province = form.querySelector('input[placeholder="Province"]').value;
        const zipCode = form.querySelector('input[placeholder="Zip Code"]').value;
        const username = form.querySelector('input[placeholder="Username"]').value;
        const password = form.querySelector('input[placeholder="Password"]').value;

        if (firstName && lastName && email && contactNumber && street && barangay && city && province && zipCode && username && password) {
            // Show success message
            messageDiv.textContent = 'Sign-up successful!';
            messageDiv.style.color = 'white';

            // Redirect to login page after 2 seconds
            setTimeout(() => {
                window.location.href = 'logIn.html'; // Replace with your login page URL
            }, 2000);
        } else {
            // Show error message
            messageDiv.textContent = 'Sign-up unsuccessful. Please fill in all required fields.';
            messageDiv.style.color = 'red';
        }
    });
});
