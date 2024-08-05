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

    // Fetch random user data on button click
    const fetchUserButton = document.getElementById('fetch-user');
    fetchUserButton.addEventListener('click', fetchRandomUser);

    function fetchRandomUser() {
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                const user = data.results[0];
                const userDetails = `
                    <h4>${user.name.title} ${user.name.first} ${user.name.last}</h4>
                    <p>Email: ${user.email}</p>
                    <p>Location: ${user.location.city}, ${user.location.country}</p>
                    <img src="${user.picture.large}" alt="User Picture">
                `;
                document.getElementById('user-details').innerHTML = userDetails;
            })
            .catch(error => console.error('Error fetching user:', error));
    }
});
