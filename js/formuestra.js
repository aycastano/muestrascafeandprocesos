
const li     = document.querySelectorAll('.li');
const bloque = document.querySelectorAll('.bloque');


//Recorrer todos los LI
li.forEach((cadaLi , i)=>{
    // Asigando  un click a cada Li
    
    li[i].addEventListener('click',()=>{
     
        //recorrecor todos los Li
        li.forEach((cadaLi , i)=>{
            
           li[i].classList.remove("activo");
          // bloque[i].classList.remove("activo");
        })
         //recuperar todos los bloque
         bloque.forEach((cadaBloque , i)=>{
            bloque[i].classList.remove("activo");
         })
        //En el li que hemos click añadimos la clase activo
        li[i].classList.add("activo");
        //en el bloque con la misma posicion le añadimos  la clase activo
        bloque[i].classList.add("activo");
    })
})

function crearMuestra(){
    location.replace("nuevaMuestra.html");
}