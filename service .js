
document.addEventListener('DOMContentLoaded', function() {
    
    
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        
        
        loginForm.addEventListener('submit', function(event) {
            
            
            event.preventDefault();

        
            
            // 2. Redirect the user to the home page
            console.log("Login successful! Redirecting to home.html...");
            window.location.href = 'home.html'; 
            
        
        });
    }



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
