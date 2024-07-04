document.addEventListener("DOMContentLoaded", function() {
    // Change text content on button click
    const button = document.getElementById('change-text');
    button.addEventListener('click', function() {
        const dynamicContent = document.getElementById('dynamic-content');
        dynamicContent.textContent = "The text has been changed!";
    });

    // Handle form submission
    const form = document.getElementById('user-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const nameInput = document.getElementById('name');
        const userName = nameInput.value;
        const dynamicContent = document.getElementById('dynamic-content');
        dynamicContent.innerHTML = `<p>Hello, ${userName}! Welcome to my full stack journey.</p>`;
    });
});