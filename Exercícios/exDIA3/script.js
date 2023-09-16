let nomeDoUsuário = prompt("Digite seu nome:");
let idadeDoUsuário = Number(prompt("Digite sua idade:"));
let alturaDoUsuário = parseFloat(prompt("Digitet sua altura:"));
let pesoDoUsuário = parseInt(prompt("Digite seu peso:"));
let anoDoUsuário = 2023 - idadeDoUsuário ;
let imcDoUsuário = pesoDoUsuário / (alturaDoUsuário * alturaDoUsuário)


console.log("Olá " + nomeDoUsuário + ", você tem " + idadeDoUsuário + " anos, nasceu em " + anoDoUsuário + ", tem " + alturaDoUsuário +
" de altura, pesa: " + pesoDoUsuário + "kg e seu imc é de " + imcDoUsuário +"kg/m²");
