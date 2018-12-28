var nomes = [ 'Rafael', 'Monica', 'Jussara' ];

for( var i = 0; i < nomes.length; i++ ){
  console.log(nomes[i]);
}

console.log('----------');

nomes.forEach( function(nome) {
  console.log(nome);
});

console.log('**************');


var canais = [ 'sbt', 'globo', 'record'];

canais.forEach( function(canal){
  canais.push('cultura');
  console.log(canal);
})
console.log('----------');

canais.forEach( function(canal){
  console.log(canal);
})


/**Native Browser JavaScript
   
Rafael
Monica
Jussara
----------
Rafael
Monica
Jussara
**************
sbt
globo
record
----------
sbt
globo
record
cultura
cultura
cultura
=> undefined */
   