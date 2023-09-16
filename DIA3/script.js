console.log("=================================================");
console.log("Novo Assunto - VARIÁVEIS E OPERADORES ARITMÉTICOS"); 
console.log("=================================================");
// let e const

let meuNome = "Alessandro Alves"
console.log(meuNome)
meuNome = "Giovanni Sacchitiello"
console.log(meuNome)
// o valor da variável se altera com o LET
console.log("============= constante =============")
// o valor da varivale não se altera com o const
const a = 2
console.log(a)
// (a = 5) não se altera pois foi declarado na variável const
console.log(a)

let num1 = 5;
let num2 = 32; 

let soma = num1 + num2;

if (num1 > 0) {
    console.log("numero grande")
    
} else { 
    console.log("numero pequeno")
    
}


console.log(soma)
console.log(num1*num2)
console.log(num1/num2)
console.log(num1-num2)
console.log(num1%num2)

console.log("========================================================");
console.log(" Novo Assunto - CONVERSÃO DE VALORES E ENTRADA DE DADOS ");
console.log("========================================================");



let entradaDoUsuario = prompt("Insira sua idade");
console.log(entradaDoUsuario);

let entradaDoUsuarioEmInt = parseInt (entradaDoUsuário)
console.log(entradaDoUsuarioEmInt);







let entradaDoUsuarioEmInt = prompt()

if ( entradaDoUsuarioEmInt > 10) { 
    console.log("Numero Grande"); 

} else { console.log("Numero Pequeno");
    
}
