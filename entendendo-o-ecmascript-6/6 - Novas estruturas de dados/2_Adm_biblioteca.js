var livros = [
    {titulo: "Livro 1", autor: "Autor 1", local: "A1"},
    {titulo: "Livro 2", autor: "Autor 2", local: "D2"},
    {titulo: "Livro 3", autor: "Autor 3", local: "L3"},
    {titulo: "Livro 4", autor: "Autor 4", local: "O4"}
]

var estantes = new Map();

for( var livro of livros){
    estantes.set(livro.titulo, livro.local);
}

function getLocalizacaoDoLivro(titulo){
    var estante = estantes.get(titulo);
    if( estante === undefined){
        return 'Livro não encontrado no acervo!';
    }

    return estante;
}

var localicalizacao = getLocalizacaoDoLivro('Livro 5')
console.log(localicalizacao);
