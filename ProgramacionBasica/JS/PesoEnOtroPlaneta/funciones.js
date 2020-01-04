function calcularPeso(){
    var peso, planeta, pesoFinal;
    var gravedadTierra = 9.8;
    var gravedadMarte =  3.7;
    var gravedadSaturno = 10.44;

    peso = document.getElementById("Peso").value;
    planeta = document.getElementById("Planeta").value;

    if (planeta == 1)
    {   
        planeta = "Marte";
        pesoFinal = (peso * gravedadMarte)/gravedadTierra;
    }

    else if (planeta == 2)
    {   
        planeta = "Saturno"
        pesoFinal = (peso * gravedadSaturno)/gravedadTierra;
    }

    else{
        pesoFinal = 0000;
    }
     document.getElementById("pesoFinal").value = "Tu peso en " + planeta + " es: " + parseInt(pesoFinal);            
}