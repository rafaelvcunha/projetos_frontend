// EcmaScript5
var boasVindas = function(nome){
    return "Seja Bem-Vindo, " + nome;
}
console.log(boasVindas("Rafael"));


// EcmaScript6
var welcome = name => `Seja Bem-Vindo, ${name}`;
console.log(welcome("Rafael"));