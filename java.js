function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var email = document.getElementById("email").value;
    var rollNumber = document.getElementById("rollNumber").value;

    if (username.length <= 6) {
        alert("Username should be greater than 6 characters");
        return false;
    }

    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password.match(passwordRegex)) {
        alert("Password should contain at least one uppercase letter, one lowercase letter, one digit, and one special symbol");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match");
        return false;
    }

    var emailRegex = /^se21uecm\d{3}@mahindrauniversity\.edu\.in$/;
    //if (!email.match(emailRegex)) {
    if (email.value !== emailRegex) {
        alert("Email should be in the format 'se21uecmxxx@mahindrauniversity.edu.in', where 'xxx' is any three-digit number");
        return false;
    }

    if (rollNumber !== "21batchECM") {
        alert("Roll number should be 21 batch ECM branch");
        return false;
    }

    alert("Registration Successful!");
    return true;
}
