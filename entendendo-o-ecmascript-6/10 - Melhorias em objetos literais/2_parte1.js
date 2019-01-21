var nome = 'Maria';
var sobrenome = 'Madalena';

//ES5
/*var pessoa = {
    nome: nome,
    sobrenome: sobrenome
}*/

const seApresentar = function(){
    console.log(`Olá! Sou a ${this.nome} ${this.sobrenome}`);
}

//ES6
var pessoa = {
    nome, sobrenome, seApresentar
}

//console.log(pessoa);

pessoa.seApresentar();