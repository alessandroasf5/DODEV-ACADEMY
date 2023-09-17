let idade = Number(prompt("Insira sua idade"))
let nome = prompt("Insira seu o nome")
// == igual | != diferente | < menor que | > maior que | <= menor ou igual | >= maior ou igual 
// === igual ao valor e o tipo da variável | !== é diferente o valor e o tipo da variável 

if (idade === 23 && nome === "Giovanni") {
    console.log("Seu nome é Giovanni e você tem 23 anos");
} else if (idade === 23 || nome === "Giovanni") {
    console.log("Ou você tem 23 anos OU seu nome é Giovanni");
}else {
    console.log("Seu nome não é Giovanni e você nao tem 23 anos");
}
