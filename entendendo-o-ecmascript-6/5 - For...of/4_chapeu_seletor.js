var chapeuSeletor = function(bruxo){
    var casas = ['Grifinória', 'Sonserina', 'Corvinal', 'Lufa-Lufa'];
    //Math.floor() = retorna valor inteiro
    //Math.random() = retorna valor randômico ao multiplicar pela quantidade de elementos
    var casa = casas[ Math.floor( Math.random() * casas.length) ];

    console.log("Bruxo: " + bruxo + " | Casa: " + casa);
}

var bruxos = ['Harry Potter', 'Hermione Granger', 'Rony Weasley'];
for( var bruxo of bruxos){
    chapeuSeletor(bruxo);
}

/** 
var bruxos = ['Harry Potter', 'Hermione Granger', 'Rony Weasley'];
var iterador = bruxos[Symbol.iterator]();
var done = false;
var proximo = iterador.next();

do{
    var bruxo = proximo.value;
    chapeuSeletor(bruxo);
    proximo = iterador.next();
}while(!proximo.done);
*/
