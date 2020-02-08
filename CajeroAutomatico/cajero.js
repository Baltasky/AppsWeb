var boton = document.getElementById("Extraer");
boton.addEventListener("click", entregarDinero);

var resultado = document.getElementById("resultado");

var dinero = 0;
var divisible = 0;
var papeles = 0;

var entregado = [];

function entregarDinero() 
{
    var txtDinero = document.getElementById("dinero");
    dinero = parseInt(txtDinero.value);

    for (var billetes of caja) 
    {
        if (dinero > 0) 
        {
            divisible = Math.floor(dinero / billetes.valor)

            if (divisible > billetes.cantidad) 
            {
                papeles = billetes.cantidad;
            }
            else 
            {
                papeles = divisible;
            }

            entregado.push(new billete(billetes.valor, papeles));
            dinero -= (billetes.valor * papeles);
        }
    }

    if (dinero > 0) 
    {    
        resultado.innerHTML = "Soy un cajero pobre no tego la cantidad solicitada :(";
    }
    else 
    {
        for (const e of entregado) 
        {
            if(e.cantidad > 0)
            { 
                resultado.appendChild(e.imagen) ;

                if (e.cantidad == 1) {
                    resultado.innerHTML += e.cantidad + " billete de $"+ e.valor +"<br><br>";
                }
                else
                {
                    resultado.innerHTML += e.cantidad + " billetes de $"+ e.valor +"<br><br>";
                } 
            }
        }
    }
}