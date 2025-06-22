
document.addEventListener('DOMContentLoaded', function() {
    
    // Find the login form on the page using its ID
    const loginForm = document.getElementById('loginForm');

    // Check if the login form actually exists on the page
    // This prevents errors if you use the same script.js file on other pages
    if (loginForm) {
        
        // Add an event listener to run code when the form is submitted
        loginForm.addEventListener('submit', function(event) {
            
            // 1. Prevent the form from submitting the default way (which causes a page refresh)
            event.preventDefault();

            // In a real application, you would add password validation here.
            // For example: check if username and password are correct.
            
            // 2. Redirect the user to the home page
            console.log("Login successful! Redirecting to home.html...");
            window.location.href = 'home.html'; 
            
            // Note: Make sure 'home.html' is in the same directory as 'login.html'
        });
    }
    
    // You can keep other JavaScript code (like for your gallery) below this.

});









//... login...//
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    if (username === "admin" && password === "1234") {
        alert("Login Successful!");
        window.location.href = "dashboard.html";  // Redirect to dashboard
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
});


//......body..///

document.getElementById("bookButton").addEventListener("click", function() {
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    if (date && time) {
        alert(`Your consultation is booked for ${date} at ${time}. We will confirm via WhatsApp!`);
    } else {
        alert("Please select a date and time.");
    }
});
//.. SERVICE ..//


document.addEventListener('DOMContentLoaded', function() {
    const services = document.querySelectorAll('.service');
    services.forEach(service => {
        service.addEventListener('click', function() {
            services.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

document.getElementById("whatsappFloatingButton").addEventListener("click", function(event) {
    let confirmChat = confirm("Chat with Oyster Consultancy on WhatsApp?");
    if (!confirmChat) {
        event.preventDefault();
    }
});
//.. privacy

document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to our Privacy Policy page. Your data protection is our priority!");
});
