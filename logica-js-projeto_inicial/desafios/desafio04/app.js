nome = prompt('qual é o seu nome?')
linguagem = prompt('Qual a linguagem de programação que você mais gosta?')
n1 = 2
n2 = 3
idade = prompt('Qual é a sua idade')
numero = prompt('digite um número')
resultado = n1 - n2
alet = 1;
nota = 4;
ra = parseInt(Math.random() * 10 +1)
ra = parseInt(Math.random() * 1000 +1)
console.log(`bem vindo ${nome}`)
alert(`bem vindo ${nome}`)
console.log(linguagem)
console.log(`a subtração de ${n1} - ${n2} é ${resultado}`)
if (idade >= 18) {
    alert('você é maior de idade')
} else {
    alert('Você é menor de idade')
}

if (numero >= 1) {
    alert('o número é positivo')
} else if (numero < 0) {
    alert('o número é negativo')
} else {
    alert('o número é igual a zero')
}

while(alet <=10){
    console.log(alet)
    alet ++
}

if (nota >= 7){
    console.log('aprovado')
} else{
    console.log('reprovado')
}

console.log(ra)