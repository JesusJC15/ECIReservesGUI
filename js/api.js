const API_URL = "https://ecireserves-bfccasdkhxcwgnev.eastus-01.azurewebsites.net/api"; 

export async function fetchUsers(){
    const response = await fetch(`${API_URL}/users`);
    return response.json();
}


export async function fetchLaboratoriess() {
    const response = await fetch(`${API_URL}/laboratories`);
    return response.json();
}

export async function fetchReservations() {
    const response = await fetch(`${API_URL}/reservations`);
    return response.json();
}

export async function loginUser(email, password) {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });
    return response.json();
}