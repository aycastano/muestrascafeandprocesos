/*document.getElementById('btnconsultar').addEventListener('submit',consultar);*/

let usuario= [];
let longitud;
function consultar(){
   db.collection("Usuarios").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {  
            console.log(doc.id, " => ", doc.data());
                /* console.log(`${doc.id} => ${doc.data()}`);*/
                usuario.push(doc.data().email);
                usuario.push(doc.data().contraseña);             
                
                });
    });

    setTimeout(() => {
    longitud = usuario.length;
    console.log("longitud:"+longitud)
    }, 3000);

    for (let i = 0; i < usuario.length; i++) {
    
           document.getElementById("tabla").innerHTML = `<table class="table">
            <thead>
              <tr>
              <th scope="col">#</th>
                <th scope="col">Email</th>
                <th scope="col">Contraseña</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>${usuario[i].email}</td>
                <td>${usuario[i].contraseña}</td>
              </tr>
                         
            </tbody>
          </table>`
    }
    
  
    console.log('LLamando la funcion');
}


