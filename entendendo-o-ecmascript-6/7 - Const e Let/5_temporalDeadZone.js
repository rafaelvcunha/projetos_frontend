//Hoisting = ZUADOOOOOOOO

function imprimirNome(nome){
    console.log('nome', nome);
}

var nome;

nome = 'Bruna';

imprimirNome(nome);

//TemporalDeadZone

let valor = 0;

if(true){
    //let valor;
    console.log(valor);
    let valor = 1;
    console.log(valor);
}

console.log(valor);