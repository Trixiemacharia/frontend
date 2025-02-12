document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.querySelector(".login form button"); // Select login button
    const orderBtn = document.querySelector(".order form button"); // Select order button

    // Validate username format (only letters)
    const usernameInput = document.getElementById("username");
    usernameInput.addEventListener("keypress", function (event) {
        if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            .test(event.key)) {
            event.preventDefault();
        }
    });

    // Validate password format (strong password)
    const passwordFormatValidation = () => {
        let input = document.getElementById("password").value;
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(input);
    }

    // Handle login button click
    loginBtn.addEventListener("click", function (event) {
        if (!passwordFormatValidation()) {
            alert("Your password must have at least 8 characters, including uppercase, lowercase, numbers, and special characters.");
            event.preventDefault(); // Stop form submission
        } else{
            window.location.href = 'main.html';
        }
    });

      //Prevent non-numeric characters in Phone Number
    const phoneInput = document.getElementById("phone");
    phoneInput.addEventListener("keypress", function (event) {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        }
    });

    //Handle order submission
    orderBtn.addEventListener("click", function (event) {
        let customerName = customerNameInput.value.trim();
        let phone = phoneInput.value.trim();

        // Validate Customer Name (letters & spaces only)
        if (!/^[a-zA-Z\s]+$/.test(customerName)) {
            alert("Customer name should contain only letters and spaces.");
            event.preventDefault();
            return;
        }

        // Validate Phone Number (must be exactly 10 digits)
        if (!/^\d{10}$/.test(phone)) {
            alert("Phone number must be exactly 10 digits.");
            event.preventDefault();
            return;
        }

        //If validations pass, allow form submission
        alert("Order placed successfully!");
    });
});

