alert("Boas vindas, ao jogo do número secreto");
let numeroSecreto = 9;
console.log(numeroSecreto)
let chute = prompt("Escolha um número entre 1 e 10");
// se chute for igual ao numero secreto
if (chute == numeroSecreto){
    alert(`Isso ai você descobriu o número secreto ${numeroSecreto}`);
} else {
    if (numeroSecreto > chute){
        alert(`O número secreto é maior que ${chute}`)
    }
}