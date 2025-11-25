import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//VARIABLES
let articulo = ['Mi','Tu','El'];
let quien = ['perro', 'abuelo', 'cartero', 'pajaro', 'primillo chico'];
let accion = ['se comio', 'robo', 'rompio', 'escondio'];
let que = ['mis deberes', 'mi telefono', 'las llaves del coche', 'las llaves de la moto'];
let cuando = ['justo antes de clase', 'mientras dormia', 'cuando estaba en clase', 'mientras comia', 'cuando estaba en el baño', 'cuando estaba leyendo'];
const objetivo = document.getElementById('excusa');
const boton = document.getElementById("nuevaExcusa");

//FUNCIONES
function valorAleatorio(maximo){
  return Math.floor(Math.random()*maximo);
}

function generarExcusa(){
   objetivo.innerHTML= `${articulo[valorAleatorio(articulo.length)]} ${quien[valorAleatorio(quien.length)]} ${accion[valorAleatorio(accion.length)]} ${que[valorAleatorio(que.length)]} ${cuando[valorAleatorio(cuando.length)]}`;
  }


//EVENTOS 
window.onload = function() {
  generarExcusa();
};

boton.onclick = function(){
  generarExcusa();
};