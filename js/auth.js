import { loginUser } from "./api.js";

document.querySelector("#loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const id = document.querySelector("#id").value;
    const password = document.querySelector("#password").value;

    try {
        const data = await loginUser(id, password);
        if (data.token) {
            localStorage.setItem("token", data.token);
            window.location.href = "dashboard.html";
        } else {
            alert("Credenciales incorrectas");
        }
    } catch (error) {
        console.error("Error en login:", error);
    }
});
