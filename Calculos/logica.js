function soma() {
    var numero1 = document.getElementById("n1").valueAsNumber
    var numero2 = document.getElementById("n2").valueAsNumber
    var resposta = document.getElementById("respSoma")

    resposta.textContent = numero1 + numero2
    // console.log(numero1, numero2)


}

function sub() {
    var valor1 = document.getElementById("v1").valueAsNumber
    var valor2 = document.getElementById("v2").valueAsNumber
    var resposta = document.getElementById("respSub")

    resposta.textContent = valor1 - valor2
}