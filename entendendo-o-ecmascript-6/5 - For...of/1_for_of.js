var numeros = [1,2,3,4,5];

for(var numero of numeros){
    console.log(numero);
}

// funciona com louvor

var carro = {
    modelo: 'fiat',
    ano: 1995
}

for(var propriedade of carro){
    console.log(propriedade);
}

//for(var propriedade of carro){
//    ^
//TypeError: carro is not iterable