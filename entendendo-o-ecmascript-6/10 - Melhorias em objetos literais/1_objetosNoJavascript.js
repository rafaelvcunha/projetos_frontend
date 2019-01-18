//Duas maneiras de criar objetos:
// - Funções construtoras
// - Objetos literais

/*
 - Um novo objeto literal é criado;
 - O construto do nosso objeto livro é definido como livro, assim como o seu tipo
   (que pode ser verificado com instanceof)
 - O protótipo do objeto livro é definido como Livro.prototype;
 - É criado um novo contexto de execução para o objeto.
*/

function Livro(titulo){
    this.titulo = titulo;
}

var livro = new Livro('Harry Potter');
console.log(livro);

//----------------------------------------------

var livro2 = {
    titulo: 'Anjos e Demônios'
}

console.log(livro2);

var livro3 = livro2;
livro2.titulo = 'O Código da Vinci';

console.log(livro2);
console.log(livro3);

//---------------------------------------------

livro2.autor = 'Dan Brown';
livro2['mostrarLivro'] = function(){
    console.log(this.titulo + ', ' + this.autor);
}

livro2.mostrarLivro();




