document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let valid = true;
    document
      .querySelectorAll(".error")
      .forEach((error) => (error.style.display = "none"));

    // Validate User Name
    const username = document.getElementById("username").value;
    if (username.trim() === "") {
      document.getElementById("usernameError").innerText =
        "User Name is required";
      document.getElementById("usernameError").style.display = "block";
      valid = false;
    }

    const password = document.getElementById("password").value;
    if (password.trim() === "") {
      document.getElementById("passwordError").innerText =
        "Password is required";
      document.getElementById("passwordError").style.display = "block";
      valid = false;
    }

    const email = document.getElementById("email").value;
    if (email.trim() === "") {
      document.getElementById("emailError").innerText = "Mail ID is required";
      document.getElementById("emailError").style.display = "block";
      valid = false;
    }

    const phone = document.getElementById("phone").value;
    if (phone.trim() === "") {
      document.getElementById("phoneError").innerText =
        "Phone Number is required";
      document.getElementById("phoneError").style.display = "block";
      valid = false;
    }

    const age = document.getElementById("age").value;
    if (age.trim() === "") {
      document.getElementById("ageError").innerText = "Age is required";
      document.getElementById("ageError").style.display = "block";
      valid = false;
    }

    if (valid) {
      alert("Form submitted successfully!");
    }
  });
