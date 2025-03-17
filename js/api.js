const API_URL = "https://ecireserves-bfccasdkhxcwgnev.eastus-01.azurewebsites.net/api/users";

async function fetchUsers() {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.success ? data.data : [];
}

async function createUser(user) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    });
    return response.json();
}

async function deleteUser(userId) {
    await fetch(`${API_URL}/${userId}`, { method: "DELETE" });
}