var nLineas = document.getElementById("Numero");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujarPorClick); //Evento cuando piche el boton
var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");
//var i=0;

function dibujarPorClick() 
{
    var txtLineas = parseInt(nLineas.value);
    var x, y;
    var espacio = ancho / txtLineas;

    for (i = 0; i < txtLineas; i++) {
        x = espacio * i;
        y = espacio * (1 + i);
        dibujarLinea("red", 300, x, y, 0);
    }

    dibujarLinea("blue", 1, 1, 300, 1);
    dibujarLinea("blue", 299, 1, 299, 299);

    alert("Se dibujaran " + txtLineas + " lineas.");
}

/*while( i < 30) 
{
    x = 10 * i;
    y = 10 * (1+i);
    dibujarLinea("red", 0, x, y, 300);
    i ++;
}*/

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
    lienzo.beginPath(); //Empezar a dibujar
    lienzo.strokeStyle = color; //Propieda del color del lapiz
    lienzo.moveTo(xInicial, yInicial); //En que cordenada empezara
    lienzo.lineTo(xFinal, yFinal); //asia que cordenada
    lienzo.stroke();
    lienzo.closePath(); //Despegar el lapiz 
}

