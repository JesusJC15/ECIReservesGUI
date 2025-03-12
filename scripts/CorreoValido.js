function validateForm() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let emailError = document.getElementById("email-error");

    // Expresión regular para validar correo electrónico
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        emailError.textContent = "Ingrese un correo válido.";
        return false; // No envía el formulario
    } else {
        emailError.textContent = ""; // Borra el mensaje de error
    }

    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return false;
    }

    // Redirigir a la pantalla de sesión de usuario
    window.location.href = "Usersession.html";
    return false; // Evita que el formulario se envíe de forma predeterminada
}