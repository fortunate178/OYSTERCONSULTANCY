document.addEventListener('DOMContentLoaded', function() {

    // --- Consultation Booking Logic ---
    const dateInput = document.getElementById('date');
    const timeSelect = document.getElementById('time');
    const bookButton = document.getElementById('bookButton');
    const bookingSection = document.getElementById('booking');

    // 1. Disable past dates in the date picker
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    // 2. Handle the "Book Now" button click
    if (bookButton) {
        bookButton.addEventListener('click', function() {
            const selectedDate = dateInput.value;
            const selectedTime = timeSelect.value;
            
            // Simple validation: check if a date is chosen
            if (!selectedDate) {
                alert('Please select a date for your consultation.');
                return; // Stop the function here
            }

            // Remove any old confirmation message
            const oldMessage = document.getElementById('confirmationMessage');
            if (oldMessage) {
                oldMessage.remove();
            }

            // Create and display a new confirmation message
            const confirmationMessage = document.createElement('div');
            confirmationMessage.id = 'confirmationMessage';
            confirmationMessage.textContent = `Your consultation is booked for ${selectedDate} at ${selectedTime}. Please complete your personal information below.`;
            
            // Insert the message after the button
            bookingSection.appendChild(confirmationMessage);
        });
    }

});
//.. privacy

document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to our Privacy Policy page. Your data protection is our priority!");
});
