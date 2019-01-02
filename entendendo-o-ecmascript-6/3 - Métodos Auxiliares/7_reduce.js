var numeros = [ 1, 2, 3, 4, 5];

/*
var soma = 0;

for( var i = 0; i < numeros.length; i++ ){
    soma += numeros[i];
}*/

var soma = numeros.reduce(function(somaAux, numero){
    return somaAux + numero;
}, 0);

console.log(soma);

/***********************************/

var alunos = [
    { nome: 'Rafael', idade: 27 },
    { nome: 'Mônica', idade: 31 },
    { nome: 'Daniel', idade: 0 },
    { nome: 'Miguel', idade: 5 }
]

var nomes = alunos.reduce(function(auxNome, aluno){
    auxNome.push(aluno.nome);
    return auxNome;
},[]);

console.log(nomes);

