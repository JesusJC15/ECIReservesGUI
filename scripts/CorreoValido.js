function validateForm() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let emailError = document.getElementById("email-error");


    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        emailError.textContent = "Ingrese un correo válido.";
        return false;
    } else {
        emailError.textContent = "";
    }

    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return false;
    }


    window.location.href = "Usersession.html";
    return false;
}