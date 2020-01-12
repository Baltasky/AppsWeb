document.addEventListener("mousedown", dibujarMouse);
document.addEventListener("mousemove", moverMouse);
document.addEventListener("mouseup", dibujarMouse);

var areaDibujo = document.getElementById("spaceCanvas");
var lienzo = areaDibujo.getContext("2d");
var xInicial = 0, yInicial = 0;
var color = document.getElementById("inputColor");
var grosor = document.getElementById("inputRange");

function dibujarMouse(evento) {
    xInicial = evento.clientX;
    yInicial = evento.clientY;
}

function moverMouse(evento) {
    
    if (evento.buttons == 0) return;
    lienzo.beginPath(); //Empezar a dibujar
    lienzo.strokeStyle = color.value; //Propieda del color del lapiz
    lienzo.lineWidth = grosor.value;
    lienzo.moveTo(xInicial, yInicial); //En que cordenada empezara
    dibujarMouse(evento);
    lienzo.lineTo(xInicial, yInicial); //asia que cordenada
    lienzo.stroke();
    lienzo.closePath(); //Despegar el lapiz 
}