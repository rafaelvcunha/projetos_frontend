/*****Formas de se declarar funções no ES5*****/

//Function Declaration (Declaração de função)
function desligar(){
    //corpo da função
}

//Function Expression (Expressão de função)
var funcaoDesligar = function(){
    //corpo da função
}

//Constructor Function (Construtor de função)
var funcaoDesligar = new Function(/*"corpo da função"*/);


/*****Inclusão de nova formas de se declarar funções no ES5*****/

//Arrow Funtion (Função de Seta)
//Parametros               //=> Fat Arrow 
(param1, param2, param3, paramN)=>{
    //corpo da função
}
// menos verbosas 
