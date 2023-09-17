console.log("=============");
console.log("ESCOPO");
console.log("=============");

let idade = Number(prompt("Insira sua idade"))
// == igual | != diferente | < menor que | > maior que | <= menor ou igual | >= maior ou igual 
// === igual ao valor e o tipo da variável | !== é diferente o valor e o tipo da variável 

if (idade <= 10) {
    console.log(idade);
    let dentroEscopo = "Giovanni"
    console.log(dentroEscopo);
    console.log("Voce tem menos ou 10 anos");
    if (true) {
    console.log("estou no terceiro escopo");
    console.log(dentroEscopo);        
    }
} else {
    console.log("Voce tem mais que 10 anos");
}

console.log("SAI DO ESCOPO  DO IF");

