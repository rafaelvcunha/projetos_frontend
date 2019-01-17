const nome = 'Rafael';
const idade = 27;

function marcacao(Strings, ...valores){
    console.log(Strings[0]);
    console.log(valores[0]);
    console.log(Strings[1]);
    console.log(valores[1]);
    console.log(Strings[2]);
    
    return 'oi';
}

var mensagem = marcacao`Meu nome é ${nome} e eu tenho ${idade} anos.`;
console.log(mensagem);