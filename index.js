limpiar = () =>{
    document.getElementById('form').reset();
}


calcular = ()=>{

    // Capturamos los inputs
    let nombre = document.getElementById('nombre').value;
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    let imc = document.getElementById('imc');

    let masculino = document.getElementById('masculino');
    let femenino = document.getElementById('femenino');
    let interpretacion = document.getElementById('interpretacion');


    indice = '';

    if(nombre == ''){
        alert("El campo nombre no ha sido ingresado")
        return;
    }else if(isNaN(peso)) {
        alert("El campo peso no ha sido ingresado");
        return;
    }else if (isNaN(altura)) {
        alert("El campo altura no ha sido ingresado");
        return;
    }else{
        indice = ((peso)/Math.pow(altura,2)).toFixed(2);
    }



    if (masculino.checked) {
        if (indice <= 20 )
            inter = "Bajo de peso"
        else if(indice >= 20 && indice <= 24.9)
            inter = "Normal"
        else if(indice >= 25.0 && indice <= 29.9)
            inter = "Sobrepeso"
        else if(indice >= 30.0)
            inter = "obesidad"
    }else if(femenino.checked){      
        if (indice <= 20 ) 
            inter = "Bajo de peso"
        else if(indice >= 20 && indice <= 23.9)
            inter = "Normal"
        else if(indice >= 24 && indice <= 28.9)
            inter = "Sobrepeso"
        else if(indice >= 29)
            inter = "obesidad"
    }else{
        alert("El campo sexo no ha sido seleccionado")
        return;
    }

    imc.value = indice;

    interpretacion.value = inter;

}

document.getElementById('form').reset();