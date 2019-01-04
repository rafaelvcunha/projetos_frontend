/** Músicas disponíveis */

var musica_1 = {titulo:'Sem você meu coração é null', autor:'Oracle'};
var musica_2 = {titulo:'Meu coração componentizado', autor:'React'};
var musica_3 = {titulo:'Tudo isso é tão dinâmico', autor:'Javascript'};
var musica_4 = {titulo:'Não me chame depois...', autor:'NodeJs'};
var musica_5 = {titulo:'No amor não existe rollback', autor:'SQL'};

var playlist = new Set([musica_2, musica_4, musica_5]);

/** Features */

// adicionar uma músicas
playlist.add(musica_1);
playlist.add(musica_3);

//remover uma música
playlist.delete(musica_4);

//remover todas as músicas
//playlist.clear();

//adicionar uma música que já está na playlist
playlist.add(musica_1);
playlist.add(musica_1);

//ver quantas músicas estão na playlist
console.log(playlist.size);

for(var musica of playlist){
    console.log(musica);
}