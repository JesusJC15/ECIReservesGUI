

let boton = document.getElementById("SignInBtn");
boton.addEventListener("click",event=>{
    findUser();
});

let signUpBtn = document.getElementById("SignUpBtn").addEventListener("click",() =>{
    window.location.href = "../CreateUser/CreateUser.html";
});
let findUser = async() => {

    let userData = {}
    userData.id = document.getElementById("id").value;
    userData.password = document.getElementById("password").value;

    const userId = userData.id;

    const petition = await fetch(`http://localhost:8080/api/users/${userId}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    const response = await petition.json();

    if (response.success) {
        alert("Inicio de sesión exitoso");
        localStorage.setItem("user", JSON.stringify(response.data));
    } else {
        alert("Usuario o contraseña incorrectos");
    }
};
