let progreso = document.querySelector(".progreso");
//ubicamos en el js la clase progreso q viene del html

let porcentaje = document.querySelector(".porcentaje");
let celebracion = document.querySelector("body");
//se trae la clase creada en el css,hace parte del body que viene del html
let avance = 0;
//arrancamos en cero

let tiempo = setInterval(()=>{
    //guarda la funcion de intervalo

    //cuando se active funcion intervalo  se sumara de 1 en 1
    avance +=1;

    progreso.style.width = `${avance}%`
    //contenedor de progreso osea la barra
     //apliqye un estilo al ancho de esa barra de progreso//
     //se rellena de acuerdo al avance q va de 1 en 1 

     if(avance ===100){
        clearInterval(tiempo)
        //cuando intervalo avance se debe detener en tiempo al llegar a 100
        celebracion.classList.add("celebracion")
        //agregue clase celebracion que es donde esta la imagen
        // contador llegue a 100 entonces para y pone la animacion en el body
        

     }
     porcentaje.textContent= `${avance}%`
     //porcentaje debemos registrar como avanza,mostrando el numero y se concardena el porcentaje
}, 75) ;
// se refrescara en 75 milisegundos para q el avance se vea bastante rapido




