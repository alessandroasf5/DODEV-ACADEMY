let fomeUsuário = prompt("Você está com fome? (SIM/NÃO)")
let dinheiroUsuário = prompt("Você está com dinheiro? (SIM/NÃO)")
let restUsuario = prompt("O restaurante está aberto? (SIM/NÃO)")

if (fomeUsuário === "não" || dinheiroUsuário ==="não") {
    console.log("Hoje a janta será em casa");
}if ( fomeUsuário === "sim" && dinheiroUsuário === "sim" && restUsuario === "não"){
    console.log("Peça um delivery");
}else if (fomeUsuário === "sim" && dinheiroUsuário === "sim" && restUsuario === "sim"){
    console.log("Hoje a janta sera no seu restaurante preferido!");
}