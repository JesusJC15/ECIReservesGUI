function validateForm() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailValue = emailInput.value;

    // Simple email validation
    if (!emailValue.includes('@')) {
        emailError.textContent = "Por favor, ingrese un correo válido con '@'.";
        return false;
    }

    emailError.textContent = ""; // Clear error message if email is valid
    alert('Formulario enviado correctamente');
    // Aquí puedes agregar la lógica para enviar el formulario
}