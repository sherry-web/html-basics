document.addEventListener("DOMContentLoaded", function() {
    // Change text content on button click
    const button = document.getElementById('change-text');
    button.addEventListener('click', function() {
        const dynamicContent = document.getElementById('dynamic-content');
        dynamicContent.textContent = "The text has been changed!";
    });

    // Handle form submission with basic validation
    const form = document.getElementById('user-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const nameInput = document.getElementById('name');
        const userName = nameInput.value.trim(); // Basic validation
        if (userName === "") {
            alert("Please enter your name.");
            return;
        }
        const dynamicContent = document.getElementById('dynamic-content');
        dynamicContent.innerHTML = `<p>Hello, ${userName}! Welcome to my full stack journey.</p>`;
    });

    // Fetch random user data on button click
    const fetchUserButton = document.getElementById('fetch-user');
    fetchUserButton.addEventListener('click', function() {
        axios.get('https://randomuser.me/api/')
            .then(function(response) {
                const user = response.data.results[0];
                const userDetails = `
                    <h4>${user.name.title} ${user.name.first} ${user.name.last}</h4>
                    <p>Email: ${user.email}</p>
                    <p>Location: ${user.location.city}, ${user.location.country}</p>
                    <img src="${user.picture.large}" alt="User Picture">
                `;
                document.getElementById('user-details').innerHTML = userDetails;
            })
            .catch(function(error) {
                console.error('Error fetching user:', error);
            });
    });

    // Display current date and time
    const dateElement = document.createElement("p");
    dateElement.textContent = "Current Date and Time: " + moment().format('MMMM Do YYYY, h:mm:ss a');
    document.body.appendChild(dateElement);
});
