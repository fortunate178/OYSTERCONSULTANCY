document.addEventListener("DOMContentLoaded", function() {
    let privacyLink = document.getElementById("privacyLink");
    
    if (privacyLink) {
        privacyLink.addEventListener("click", function(event) {
            let confirmPolicy = confirm("You are about to view our Privacy Policy. Continue?");
            if (!confirmPolicy) {
                event.preventDefault();
            }
        });
    }
});
