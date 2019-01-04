var carro = {
    modelo: 'fiat',
    ano: 1995
}

//for(var propriedade of carro){
//    console.log(propriedade);
//}

for(var propriedade in carro){
    var info = carro[propriedade];
    console.log(info);
}