// Alguns objetos no Javascript já são iteráveis por padrão ...
// Arrays
// Strings
// Maps e Sets

// Basta a gente obter o seu iterador
var bruxos = ['Harry Potter', 'Hermione Granger', 'Rony Weasley'];

var iteradoresBruxos = bruxos[Symbol.iterator]();

console.log( iteradoresBruxos.next() );
console.log( iteradoresBruxos.next() );
console.log( iteradoresBruxos.next() );
console.log( iteradoresBruxos.next() );

