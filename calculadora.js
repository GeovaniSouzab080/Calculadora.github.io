var numero1 = 0
var operador
var numero2 = 0

function calc(numero1, operacao, numero2) {
    switch (operacao) {
        case "+": return numero1 + numero2
        case "-": return numero1 - numero2
        case "*": return numero1 * numero2
        case "=": return numero1 = numero2
        case "%": return numero1 % numero2
    }
}

function setarnumeros(numero) {
    var divi = document.getElementById("visor").innerText
    if (!operador) {
        numero1 = divi + numero
    } else {
        numero2 = numero2 + "" + numero
    }
    document.getElementById("visor").innerHTML += numero
}

function setarOperadores(operadorDigitado) {
    operador = operadorDigitado
    document.getElementById("visor").innerHTML += operadorDigitado
}


function setarResultado() {
    var resultado
    if (numero1 && numero2 && operador) {
        resultado = calc(parseFloat(numero1) , operador, parseFloat(numero2))
    }
    else {
        resultado = 0
    }
    document.getElementById("visor").innerHTML=resultado
    numero1=resultado
    numero2=0
    operador=""
}

