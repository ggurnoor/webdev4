document.getElementById("contactForm").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const error = document.getElementById("error");

    // Regular expressions
    const phoneRegex = /^\d{10}$/; // Validates that the phone number is exactly 10 digits
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Validates email format

    // Validation checks
    if (name === "" || !phoneRegex.test(phone) || !emailRegex.test(email)) {
        error.style.display = "block";
        error.textContent = "Please enter a valid name, a 10-digit phone number, and a valid email address.";
        event.preventDefault();
    } else {
        error.style.display = "none";
    }
});

// Change the background and font color when a field is focused
const inputs = document.querySelectorAll("#contactForm input, #contactForm textarea");
inputs.forEach(input => {
    input.addEventListener("focus", function() {
        this.style.backgroundColor = "#e0f7fa";
        this.style.color = "#00796b";
    });

    input.addEventListener("blur", function() {
        this.style.backgroundColor = "";
        this.style.color = "";
    });
});
