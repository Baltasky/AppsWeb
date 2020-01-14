var granjita1 = document.getElementById("granja1");
var lienzo = granjita1.getContext("2d");

var granjita2 = document.getElementById("granja2");
var lienzo2 = granjita2.getContext("2d");

var fondo = { url: "imagenes/tile.png", cargaOK: false };
var vaca = { url: "imagenes/vaca.png", cargaOK: false };
var cerdo = { url: "imagenes/cerdo.png", cargaOK: false };
var pollo = { url: "imagenes/pollo.png", cargaOK: false };
var tecla = { ARRIBA: 38, ABAJO: 40, IZQUIERDA: 37, DERECHA: 39};

document.addEventListener("keydown", moverCerdo);

var cerdoX = 220, cerdoY = 220;

function moverCerdo(evento)
{

    switch (evento.keyCode) 
    {
        case tecla.ARRIBA:
        moverCerdito(cerdoX, cerdoY);
        cerdoY = cerdoY - 10;
            break;

        case tecla.ABAJO:
        moverCerdito(cerdoX, cerdoY);
        cerdoY = cerdoY + 10;
            break;
        
        case tecla.IZQUIERDA:
        moverCerdito(cerdoX, cerdoY);
        cerdoX = cerdoX - 10;
            break;
        
        case tecla.DERECHA:
        moverCerdito(cerdoX, cerdoY);
        cerdoX = cerdoX + 10;
            break;
    
        default:
            break;
    }


}

fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVacas);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdos);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollos);

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();
}

function cargarCerdos()
{
    cerdo.cargaOK = true;
    dibujar();
}

function cargarPollos()
{
    pollo.cargaOK = true;
    dibujar();
}

function dibujar()
{
    if(fondo.cargaOK)
    {
         lienzo.drawImage(fondo.objeto, 0, 0);
    }

    if(vaca.cargaOK)
    {
        var cantidad = aleatorio(1, 9);

         for(var v = 0; v < cantidad; v++)
        {
            x = aleatorio(0, 5);
            y = aleatorio(0, 5);
            x = x * 80;
            y = y * 80;

            lienzo.drawImage(vaca.objeto, x, y);
        }
    }

    if(pollo.cargaOK)
    {
        var cantidad = aleatorio(1, 15);

        for(var p = 0; p < cantidad; p++)
        {
            x = aleatorio(0, 5);
            y = aleatorio(0, 5);
            x = x * 80;
            y = y * 80;
            lienzo.drawImage(pollo.objeto, x, y);
        }
    }
}

function moverCerdito(cerdoX, cerdoY)
{
    clearcanvas();
    lienzo2.drawImage(cerdo.objeto, cerdoX, cerdoY);
}

function clearcanvas() {
	//elimina todo lo del canvas --->
	lienzo2.clearRect(0, 0, granjita2.width, granjita2.height);
}

function aleatorio(min, max)
{
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}
