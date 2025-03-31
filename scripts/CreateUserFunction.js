let boton = document.getElementById("createUserBtn");
boton.addEventListener("click",event=>{
    createUser();
});

let createUser = async() => {

    let userData = {}
    userData.name = document.getElementById("name").value;
    userData.id = document.getElementById("id").value;
    userData.email = document.getElementById("email").value;
    userData.password = document.getElementById("password").value;

    const petition = await fetch("http://localhost:8080/api/users", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

}

