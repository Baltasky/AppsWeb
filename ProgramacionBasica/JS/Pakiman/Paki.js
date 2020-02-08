var imagenes = [];
imagenes["Cauchin"] = "imagenes/vaca.png";
imagenes["Pokacho"] = "imagenes/pollo.png";
imagenes["Tosinauro"] = "imagenes/cerdo.png";


var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tosinauro", 120, 40));

for (const pokis of coleccion) 
{
   pokis.mostrar();
}