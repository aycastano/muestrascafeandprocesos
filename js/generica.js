export function atras(url){
location.replace(url);
 }


export function horaActual(){
        let hora = new Date();
        let horaactual = hora.getDate()+"/"+hora.getMonth()+"/"+hora.getFullYear()+" "+hora.getHours()+":"+hora.getMinutes()+":"+hora.getSeconds();  
    return horaactual;
}

//funcion para los checked de productor
const empresas = document.getElementById('empresas');

empresas.addEventListener('click',async e=>{
    e.preventDefault();
        location.replace("nuevaMuestraEmpresa.html");
});


//funcion para los checked de empresa
const productores = document.getElementById('productores');  
productores.addEventListener('click',async e=>{
    e.preventDefault();
    location.replace("nuevaMuestraProductor.html");
});