



function somar(){
    var numero1 = document.getElementById('numero1').value;
    var numero2 = document.getElementById('numero2').value;
    var resultado = document.getElementById('result');
    resultado.value = Number.parseInt(numero1) + Number.parseInt(numero2);
    return resultado;
}   

function subtrair(){
    numero1 = document.getElementById('numero1').value;
    numero2 = document.getElementById('numero2').value;
    resultado = document.getElementById('result');
    resultado.value = Number.parseInt(numero1) - Number.parseInt(numero2);
    return resultado;
}

function multiplicar(){
    numero1 = document.getElementById('numero1').value;
    numero2 = document.getElementById('numero2').value;
    resultado = document.getElementById('result');
    resultado.value = Number.parseInt(numero1) * Number.parseInt(numero2);
    return resultado;
}

function dividir(){
    numero1 = document.getElementById('numero1').value;
    numero2 = document.getElementById('numero2').value;
    resultado = document.getElementById('result');
    resultado.value = Number.parseInt(numero1) / Number.parseInt(numero2);
    return resultado;
}


function reset() {
    document.getElementById('numero1').value = null
    document.getElementById('numero2').value = null
    document.getElementById('result').value = null
}