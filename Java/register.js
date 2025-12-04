// Back to homepage
function goBack() {
    window.location.href = "Home.html";
}

// Registration logic
document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Email validation
    if (!email.endsWith("@iub.edu.bd")) {
        alert("Please use your official IUB email address (@iub.edu.bd)");
        return;
    }

    // Password checks
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Final register success
    alert("Account created successfully for: " + name);

    // Redirect
    window.location.href = "login.html";
});
