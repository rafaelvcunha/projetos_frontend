var jogos = [
    {nome: 'Unchated 4: A Thiefs End', categoria: 'ação'},
    {nome: 'Gran Turismo 6', categoria: 'corrida'},
    {nome: 'Crash Bandicoot', categoria: 'aventura'},
    {nome: 'Battlefield', categoria: 'shooter'},
    {nome: 'Fifa 18', categoria: 'esportes'}
];

/*ES5
var haJogoDeCorrida = false;

for( var i = 0; i < jogos.length; i++){
    var jogo = jogos[i];
    if( jogo.categoria === 'corrida'){
        haJogoDeCorrida = true;
        break;
    }
}*/

var haJogoDeCorrida = jogos.some(function(jogo){
    return jogo.categoria === 'corrida';
});

console.log(haJogoDeCorrida);
