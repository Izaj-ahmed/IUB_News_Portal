function goBack() {
    window.location.href = "Home.html";
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Please fill in all fields");
        return;
    }
    alert("Logged in as: " + email);
    window.location.href = "Home.html";
});
