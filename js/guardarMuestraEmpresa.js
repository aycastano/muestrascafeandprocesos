import {atras,horaActual} from './generica.js';
import {db} from './firebase.js';
import { collection ,addDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js"
import {showMessage} from './showMessage.js';


const tipoanalisis = document.getElementById("tipoanalisis");
const presentacionmuestra = document.getElementById("presentacionmuestra");
const empresa = document.getElementById("empresa");
const nit = document.getElementById("nit");
const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const direccion = document.getElementById('direccion');   
const departamento = document.getElementById('departamento');  
const municipio = document.getElementById('municipio');   
const codigoproductor  = document.getElementById('codigoproductor');
const codigomuestra = document.getElementById('codigomuestra');  
const proceso = document.getElementById('proceso');    
const humedad = document.getElementById('humedad');  
const origen = document.getElementById('origen');
const codigousuario = document.getElementById('codigousuario');
const observaciones = document.getElementById('observaciones');

let hora = horaActual();
form.addEventListener("submit" , async e=>{
    e.preventDefault();
    //try {
     await addDoc(collection(db, "muestrasProductores"), {
            tipoanalisis: tipoanalisis.value,
            presentacionmuestra: presentacionmuestra.value,
            empresa: empresa.value,
            nit: nit.value,
            nombre: nombre.value,
            telefono: telefono.value,
            direccion: direccion.value,
            departamento: departamento.value,
            municipio: municipio.value,
            codigoproductor: codigoproductor.value,
            codigomuestra: codigomuestra.value,
            proceso: proceso.value,
            humedad: humedad.value,
            origen: origen.value,
            codigousuario: codigousuario.value,
            observaciones: observaciones.value,
            hora
          });
          showMessage("Muestra guardada con exito","success");
    // } catch (error) {
    //     showMessage("Error al guardarse la muestra");
    // }
  

})

const atrasmuestra = document.getElementById("atrasmuestra");
atrasmuestra.addEventListener("click",async e=>{
    e.preventDefault();
    atras('landing.html');
})


