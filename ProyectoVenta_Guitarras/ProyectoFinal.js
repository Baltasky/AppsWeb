//Función para selecionar un producto en una lista desplegable
function Change(selectTag) {
    var whichSelected = selectTag.selectedIndex; // Regresamos el valor selecionado 
    var productSelecionado = selectTag.options[whichSelected].text;
    var precioProducto = 0;

    switch (productSelecionado) {
        case "Seleccionar":
            precioProducto = "";
            break;
        case "Invie Telecaster":
            precioProducto = 6719.50 ;
            break;
        case "Invie Stratocaster":
            precioProducto = 7599.50;
            break;
        case "Invie Les Paul":
            precioProducto = 3699.00;
            break;
        case "Invie Firebird":
            precioProducto = 21000.00;
            break;
            case "Invie Jazzmaster":
            precioProducto = 25700.50;
            break;
            case "Invie Acustica":
            precioProducto = 17500.00;
            break;
            case "Invie Classic":
            precioProducto = 15000.00;
            break;
        default:
            alert("No es valido");
            break;
    }
    document.getElementById("txtPrecio").value = Number(precioProducto);
}

//Función para ir agregando registros a la tabla
function AgregarProducto() {
    var producto = document.getElementById("txtProducto").value;
    var precio = document.getElementById("txtPrecio").value;
    var cantidad = document.getElementById("txtCantidad").value;

    if (Number(precio) == 0 || Number(cantidad) == 0) {
        alert("LLenar correctamente los campos antes de agregar producto");
    } else {
        var subTotal = Number(precio) * Number(cantidad);

        //Seleccionamos el cuerpo de la tabla 
        var tabla = document.getElementById("tbody");

        //Creamos un nuevo elemento tr y lo guardamos en nuevaFila
        var nuevaFila = document.createElement("tr");

        //Creamos un nuevo TD y lo guardamos en nuevoTd1
        var nuevoTd1 = document.createElement("td");
        //Asignamos contenido a nuevoTd1
        nuevoTd1.innerHTML = producto;
        //Creamos un nuevo TD y lo guardamos en nuevoTd2
        var nuevoTd2 = document.createElement("td");
        //Asignamos contenido a nuevoTd2
        nuevoTd2.innerHTML = precio;
        //Creamos un nuevo TD y lo guardamos en nuevoTd3
        var nuevoTd3 = document.createElement("td");
        //Asignamos contenido a nuevoTd3
        nuevoTd3.innerHTML = cantidad;
        //Creamos un nuevo TD y lo guardamos en nuevoTd4
        var nuevoTd4 = document.createElement("td");
        //Asignamos contenido a nuevoTd4
        nuevoTd4.innerHTML = subTotal;

        //Agregamos tds al tr
        nuevaFila.appendChild(nuevoTd1);
        nuevaFila.appendChild(nuevoTd2);
        nuevaFila.appendChild(nuevoTd3);
        nuevaFila.appendChild(nuevoTd4);

        //Agregamos el tr a el cuerpo de la tabla
        tabla.appendChild(nuevaFila);
    }
}

//Función para sumar los subtotales y nos de como resultado el total
function calcularTotal() {
    var total = 0;

    // obtenemos todas las filas del tbody
    var filas = document.querySelectorAll("#tblProductos tbody tr");

    // recorremos cada una de las filas
    filas.forEach(function (b) {

        // obtenemos las columnas de cada fila
        var columnas = b.querySelectorAll("td");

        // obtenemos los valores de el producto y cantidad
        var producto = Number(columnas[1].textContent);
        var cantidad = Number(columnas[2].textContent);

        //Calculamos el total
        total += Number(producto) * Number(cantidad);
    });

    if (Number(total) == 0) {
        alert("No hay productos agregados para calcular");
        document.getElementById("txtTotal").value = "";
    } else {
        document.getElementById("txtTotal").value = total; // mostramos la suma total
    }
}

//Función para cobrar 
function cobrar() {
    var dineroRecibido = document.getElementById("txtDineroRecibido").value;
    var total = document.getElementById("txtTotal").value;

    if (Number(dineroRecibido) < Number(total) || Number(dineroRecibido) <= 0) {
        alert("Cantidad no valida");
        document.getElementById("txtCambio").value = "";
    } else if (Number(total) == 0) {
        alert("No hay nada que cobrar");
        document.getElementById("txtCambio").value = "";
    } else {
        var cambio = Number(dineroRecibido) - Number(total);
        document.getElementById("txtCambio").value = "$" + cambio + " MXN";
    }
}
