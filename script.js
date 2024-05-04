import {barcelona,londres,paris,roma} from './ciudades.js';

let enlaces = document.querySelectorAll('a');

let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio');

console.log(enlaces);

//Agregar un evento CLIC a cada enlace

enlaces.forEach(function(enlace){
    enlace.addEventListener('click',function(){
        //Remover la clase Active de todos los enlaces.
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        });

        //Agregar la clase "Active" al enlace actual.
        this.classList.add('active')

        //Obtener el contenido correspondiente segun el enlace
        let contenido = obtenerContenido(this.textContent)

        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio

    })
        //Agregar al que corresponda

        //Traer la informacion del objerto correspondiente a la eleccion 


        //Mostrar el contenido en el Dom

});

//Funcion para traer la informacion corresta desde ciudades.js
function obtenerContenido(enlace){
    let contenido= {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    }
    return contenido[enlace];

}