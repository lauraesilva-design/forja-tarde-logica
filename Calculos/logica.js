function soma() {
    var numero1 = document.getElementById("n1").valueAsNumber
    var numero2 = document.getElementById("n2").valueAsNumber
    var resposta = document.getElementById("respSoma")

    resposta.textContent = numero1 + numero2
    // console.log(numero1, numero2)


}

function sub() {
    var valor1 = parseFloat(document.getElementById("v1").value)
    var valor2 = parseFloat(document.getElementById("v2").value)
    document.getElementById("respSub").textContent = valor1 - valor2

}
function multi(){
    var number1= parseFloat(document.getElementById("v3").value)
    var number2= parseFloat(document.getElementById("v4").value)
     document.getElementById("respMulti").textContent = number1 * number2
}
function div(){
    var chuva1= parseFloat(document.getElementById("v5").value)
    var chuva2= parseFloat(document.getElementById("v6").value)
    var respo=document.getElementById("respDiv").textContent = chuva1 / chuva2

    if (chuva2 !== 0){
        resp.innerHTML=(chuva1/chuva2).toFixed(2)
    }else{
        resp.innerHTML= "Não se divide por 0"
    }
        
}