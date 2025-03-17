document.addEventListener("DOMContentLoaded", async () => {
    const userTableBody = document.getElementById("userTableBody");
    const userForm = document.getElementById("userForm");

    async function loadUsers() {
        userTableBody.innerHTML = "";
        const users = await fetchUsers();
        users.forEach(user => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.rol}</td>
                <td>
                    <button class="delete-btn" data-id="${user.id}">Eliminar</button>
                </td>
            `;
            userTableBody.appendChild(row);
        });

        document.querySelectorAll(".delete-btn").forEach(button => {
            button.addEventListener("click", async (event) => {
                const userId = event.target.getAttribute("data-id");
                await deleteUser(userId);
                loadUsers();
            });
        });
    }

    userForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const user = {
            id: document.getElementById("userId").value,
            name: document.getElementById("userName").value,
            email: document.getElementById("userEmail").value,
            password: document.getElementById("userPassword").value,
            rol: document.getElementById("userRole").value
        };
        await createUser(user);
        userForm.reset();
        loadUsers();
    });

    loadUsers();
});