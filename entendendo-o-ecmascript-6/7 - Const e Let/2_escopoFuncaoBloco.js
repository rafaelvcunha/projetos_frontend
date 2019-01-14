//escopo de função do ES5
/*var mensagem = "Olá";

function mensagem(){
    var mensagem = 'adeus';
}

console.log(mensagem);
*/

//variaveis declaradas com var possuem escopo de função
var arrayVar = [];
for (var i = 1; i < 5; i++){
    arrayVar.push(function(){
        console.log(i);
    });
}

i = 10;

arrayVar.forEach(function(funcao){
    funcao();
})

console.log('..........');

//variaveis declaradas com let possuem escopo de bloco
var arrayLet = [];
for (let i = 1; i < 5; i++){
    arrayLet.push(function(){
        console.log(i);
    });
}

arrayLet.forEach(function(funcao){
    funcao();
})