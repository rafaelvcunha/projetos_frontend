/*var mensagem = "ola";
{
    var mensagem = "adeus";
}

console.log(mensagem); //é impresso o "adeus"*/
//********************************************/

//escopo de função do ES5
var mensagem = "ola";

function mensagem(){
    var mensagem = "adeus";
}

console.log(mensagem); //é impresso o "ola"*/

// var tem scopo de função e var tem scopo de bloco