var map = new Map();
function funcao(){};
var objeto = {};

map.set("string","sou uma String");
map.set("string2","sou uma String");
map.set(objeto,"sou um objeto");
map.set(funcao,"sou uma função");

//get

console.log(map.get("string"));
console.log(map.get(objeto));
console.log(map.get(funcao));

//size
console.log("tamanho: " + map.size);

//has
console.log(map.has("string"));
console.log(map.has("string3"));

//delete
map.delete("string");
console.log(map.has("string"));

//clear
console.log("tamanho: " + map.size);
map.clear();
console.log("tamanho: " + map.size);

console.log("**********************");

//foreach
var mapforEach = new Map();

function registrarElementosDoMapa(valor, chave, mapa) {
    console.log(`m[${chave}] = ${valor}`);
    mapforEach.set(valor, chave);
}
new Map([['foo', 3], ['bar', {}], ['baz', undefined]]).forEach(registrarElementosDoMapa);

console.log("tamanho: " + mapforEach.size);

for( entrada of mapforEach.entries()){
    console.log(entrada);
}

for( chave of mapforEach.keys()){
    console.log(chave);
}

for( valor of mapforEach.values()){
    console.log(valor);
}



