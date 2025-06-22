document.addEventListener('DOMContentLoaded', () => {

    // Select all images within any gallery grid
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    
    // Check if any gallery images exist on the page
    if (galleryImages.length > 0) {
    
        // Create the modal elements dynamically
        const modal = document.createElement('div');
        modal.className = 'modal';
        document.body.appendChild(modal);

        const modalImg = document.createElement('img');
        modalImg.className = 'modal-content';
        modal.appendChild(modalImg);

        const closeBtn = document.createElement('span');
        closeBtn.className = 'close';
        closeBtn.innerHTML = '&times;'; // The "x" character
        modal.appendChild(closeBtn);

        // Hide the modal by default
        modal.style.display = 'none';

        // Add a click event to each gallery image
        galleryImages.forEach(img => {
            img.addEventListener('click', () => {
                modal.style.display = 'flex'; // Use flex to center the content
                modalImg.src = img.src;
                modalImg.alt = img.alt;
            });
        });

        // Function to close the modal
        const closeModal = () => {
            modal.style.display = 'none';
        };

        // Close the modal when the close button is clicked
        closeBtn.addEventListener('click', closeModal);

        // Close the modal when the user clicks anywhere on the dark background
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Close the modal when the "Escape" key is pressed
        document.addEventListener('keydown', (e) => {
            if (e.key === "Escape" && modal.style.display !== 'none') {
                closeModal();
            }
        });
    }
});
//.. privacy

document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to our Privacy Policy page. Your data protection is our priority!");
});
