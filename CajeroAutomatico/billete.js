//creamos la clase billete
class billete 
{
    constructor(v, c) 
    {
        this.imagen = new Image();
        this.valor = v;
        this.cantidad = c;   
        this.imagen.src = "imagenes/"+ this.valor + ".jpg"; 
    }

}


//dentro de array caja instanciamos 3 ojetos de la clase billete
var caja = [];
caja.push(new billete( 500, 5));
caja.push(new billete( 200, 5));
caja.push(new billete( 100, 5));
caja.push(new billete( 50, 5));
caja.push(new billete( 20, 5));




