var jogos = [
    {nome: 'Unchated 4: A Thiefs End', categoria: 'ação'},
    {nome: 'Gran Turismo 6', categoria: 'corrida'},
    {nome: 'Need for Speed Most Wanted', categoria: 'corrida'},
    {nome: 'Mario Kart 8', categoria: 'corrida'},
    {nome: 'Forza Motorsport', categoria: 'corrida'},
];

/*ES5
var todosJogosCorrida = true;

for( var i = 0; i < jogos.length; i++){
    var jogo = jogos[i];
    if( jogo.categoria !== 'corrida'){
        todosJogosCorrida = false;
        break;
    }
}*/

var todosJogosCorrida = jogos.every(function(jogo){
    return jogo.categoria === 'corrida';
});

console.log(todosJogosCorrida);