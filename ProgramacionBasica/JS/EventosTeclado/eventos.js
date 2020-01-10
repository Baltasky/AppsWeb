var teclas = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39 };

document.addEventListener("keyup", dibujarTeclado);

var areaDibujo = document.getElementById("spaceCanvas");
var lienzo = areaDibujo.getContext("2d");
var color = document.getElementById("inputColor");
var range = document.getElementById("inputRange");

var x = 150, y = 150;

function dibujarTeclado(evento) {
    var colorcito = color.value;
    var grosor = range.value;
    var movimiento = 10;

    switch (evento.keyCode) {
        case teclas.UP:
            dibujarLinea(colorcito, grosor, x, y, x, y - movimiento);
            y = y - movimiento;
            break;

        case teclas.DOWN:
            dibujarLinea(colorcito, grosor, x, y, x, y + movimiento);
            y = y + movimiento;
            break;

        case teclas.LEFT:
            dibujarLinea(colorcito, grosor, x, y, x - movimiento, y);
            x = x - movimiento;
            break;

        case teclas.RIGHT:
            dibujarLinea(colorcito, grosor, x, y, x + movimiento, y);
            x = x + movimiento;
            break;

        default:
            break;
    }
}

function dibujarLinea(color, grosor, xInicial, yInicial, xFinal, yFinal) {
    lienzo.beginPath(); //Empezar a dibujar
    lienzo.strokeStyle = color; //Propieda del color del lapiz
    lienzo.lineWidth = grosor;
    lienzo.moveTo(xInicial, yInicial); //En que cordenada empezara
    lienzo.lineTo(xFinal, yFinal); //asia que cordenada
    lienzo.stroke();
    lienzo.closePath(); //Despegar el lapiz 
}