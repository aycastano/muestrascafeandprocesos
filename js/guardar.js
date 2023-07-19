
document.getElementById('formSaveUser').addEventListener('submit',saveUser);

let email;
let pass;
function saveUser(e){
    e.preventDefault();
    email = document.getElementById("InputEmail").value;
    pass = document.getElementById("InputPassword").value;

    db.collection("Usuarios").add({
        contraseña: pass,
        email: email
        
    })
    .then((docRef) => {
        alert("Registros exitoso");
    })
    .catch((error) => {
        alert("Registros no exitoso");
    });

   

   
 
}