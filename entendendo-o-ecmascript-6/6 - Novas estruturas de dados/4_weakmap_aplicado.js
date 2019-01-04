//Onde usar weakMap?
//Para manter o programa protegido de memory leak
//Manter dados privados dentro da aplicação

/**
function Pessoa(nome){
    this._nome = nome;
}

Pessoa.prototype.getNome = function(){
    return this._nome;
} */

var Pessoa = (function(){

    var dadosPrivados = new WeakMap();

    function Pessoa(nome){
        dadosPrivados.set(this,{ nome: nome });
    }

    Pessoa.prototype.getNome = function(){
        return dadosPrivados.get(this).nome;
    };

    return Pessoa;
}());

var roberto = new Pessoa('Roberto');
console.log(roberto.getNome());
console.log(roberto._nome);