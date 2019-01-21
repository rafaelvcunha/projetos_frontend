const nomeDoMetodo = 'invocar';

const objeto = {
    [nomeDoMetodo](){
        console.log('executou o método!');
    }
}


objeto.invocar();

const nomeFuncao = 'mostrar';
const propriedade = 'Nome';

const objeto2 = {
    Nome: 'Objeto',
    [`${nomeFuncao}${propriedade}`](){
        console.log(this[propriedade]);
    }
}

objeto2.mostrarNome();

