function login() {

    const role = document.getElementById("role").value;
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Admin Login
    if (
        role === "admin" &&
        email === "admin@electromart.com" &&
        password === "Admin@123"
    ) {
        alert("Admin Login Successful");
        window.location.href = "admin.html";
    }

    // Vendor Login
    else if (
        role === "vendor" &&
        email === "vendor@electromart.com" &&
        password === "Vendor@123"
    ) {
        alert("Vendor Login Successful");
        window.location.href = "vendor.html";
    }

    else {
        alert("Invalid Email or Password");
    }
}