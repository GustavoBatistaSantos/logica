var dia = prompt("Qual é o dia da semana")

if (dia == "sabado"){
    alert("Bom fim de semana")
} else if(dia == "domingo"){
    alert("Bom fim de semana")
} else{
    alert("Boa semana")
}

var numero = prompt("Digite um número positivo ou negativo")

if (numero == 0){
    alert("o seu número é zero")    
} else if (numero < 0){
    alert("o seu número é negativo")
} else{
    alert("o seu numero é positivo")
}

var pontos = prompt("informe a sua pontuação")

    if (pontos >=100){
        alert("Parabéns, você venceu!")
    } else  {
        alert("Tente novamente para ganhar")
    }

var saldo = prompt("Digite o seu saldo")
alert (`o seu saldo é ${saldo}`)

var nome = prompt("Qual é o seu nome")
alert(`Seja bem vindo ${nome}`)