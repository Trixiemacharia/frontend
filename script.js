document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.querySelector(".login form button"); // Select login button
  const orderBtn = document.querySelector(".order form button"); // Select order button

  // Validate username format (only letters)
  const usernameFormatValidation = () => {
      let usernameInput = document.getElementById("username");
      usernameInput.addEventListener("keypress", function (event) {
          if (!/[a-zA-Z]/.test(event.key)) {
              event.preventDefault();
          }
      });
  };

  // Validate password format (strong password)
  const passwordFormatValidation = () => {
      let input = document.getElementById("password").value;
      let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!regex.test(input)) {
          alert("Your password must have at least 8 characters, including uppercase, lowercase, numbers, and special characters.");
          return false;
      }
      return true;
  };

  // Handle login button click
  loginBtn.addEventListener("click", function (event) {
      usernameFormatValidation();
      if (!passwordFormatValidation()) {
          event.preventDefault(); // Stop form submission
      }
  });

  // Prevent non-numeric characters in phone number
  document.getElementById("phone").addEventListener("keypress", function (event) {
      if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
      }
  });

  // Handle order submission
  orderBtn.addEventListener("click", function (event) {
      let customerName = document.getElementById("customer-name").value;
      let phone = document.getElementById("phone").value;

      if (!customerName.match(/^[a-zA-Z\s]+$/)) {
          alert("Customer name should contain only letters.");
          event.preventDefault();
      }
      
      if (!phone.match(/^\d{10}$/)) {
          alert("Phone number must be 10 digits.");
          event.preventDefault();
      }
  });
});
