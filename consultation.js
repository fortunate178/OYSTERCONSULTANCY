// consultation.js - simple client-side validation and confirmation

document.addEventListener('DOMContentLoaded', () => {
  const bookButton = document.getElementById('bookButton');
  const bookingDate = document.getElementById('booking-date');
  const bookingTime = document.getElementById('booking-time');
  const confirmation = document.getElementById('confirmationMessage');

  const form = document.getElementById('consultationForm');
  const formError = document.getElementById('form-error');

  // Booking button: shows a confirmation message (client-side).
  bookButton.addEventListener('click', () => {
    formError.classList.add('hidden');
    confirmation.classList.add('hidden');

    if (!bookingDate.value) {
      formError.textContent = 'Please choose a date for the consultation.';
      formError.classList.remove('hidden');
      return;
    }
    if (!bookingTime.value) {
      formError.textContent = 'Please choose a time for the consultation.';
      formError.classList.remove('hidden');
      return;
    }

    const dateText = new Date(bookingDate.value).toLocaleDateString();
    confirmation.textContent = `Thanks — your slot for ${dateText} at ${bookingTime.value} was temporarily reserved. Please complete and submit the form below to confirm.`;
    confirmation.classList.remove('hidden');

    window.scrollTo({ top: confirmation.offsetTop - 80, behavior: 'smooth' });
  });

  // Form submit: basic validation, then "submit" (here we simulate submission)
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formError.classList.add('hidden');

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phoneNumber').value.trim();

    if (!fullName || !email || !phone) {
      formError.textContent = 'Please fill in your full name, email and phone number.';
      formError.classList.remove('hidden');
      return;
    }

    // Basic client-side email format check
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      formError.textContent = 'Please enter a valid email address.';
      formError.classList.remove('hidden');
      return;
    }

    // Simulate successful submit (replace with real POST to server)
    // e.g., use fetch('/api/book', {method:'POST', body: JSON.stringify({...})})
    const confirmationMsg = document.getElementById('confirmationMessage');
    confirmationMsg.textContent = `Thanks ${fullName}! Your consultation request has been received. We'll contact you on ${phone} or ${email}.`;
    confirmationMsg.classList.remove('hidden');

    // Optionally clear the form after submit
    form.reset();
    bookingDate.value = '';
    bookingTime.value = '';
  });
});
