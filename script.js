function showModal(imageUrl) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');

    modalImage.src = imageUrl; // Set the image source
    modal.style.display = 'block'; // Show the modal
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none'; // Hide the modal
}

// Optional: Close modal by clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Function to validate the form
function validateForm() {
    const name = document.querySelector('input[type="text"][placeholder="Your Name"]');
    const email = document.querySelector('input[type="email"][placeholder="Your E-mail"]');
    const subject = document.querySelector('input[type="text"][placeholder="Subject"]');
    const message = document.querySelector('textarea[placeholder="Your Message"]');
    
    // Check if fields are empty
    if (name.value === "" || email.value === "" || subject.value === "" || message.value === "") {
        alert("All fields are required!");
        return false;
    }

    // Validate email format using a simple regular expression
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // If all checks pass, show a success message (can be replaced with actual form submission logic)
    alert("Form submitted successfully! :)");
    return true;
};
