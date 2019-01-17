console.log(this); //no console apresenta window

//*****************************/

var objeto = {
    meuContexto : function(){
        console.log(this);
    }
}

objeto.meuContexto(); //{ meuContexto: [Function: meuContexto] }

console.log("\n\n*********************\n\n");

/*****************************/
//Precisamos sempre entender o contexto das coisas...
//2 props: nome, membros
//método: MembrosDaEquipe

//EcmaScript5
const equipe = {
    nome: 'linguagens de programação',
    membros: ['JavaScript','Java', 'C', 'Python' ],
    membrosDaEquipe: function(){
        const that = this;
        this.membros.forEach(function(membro){
            console.log(`${membro} faz parte da equipe ${that.nome}`);
        })
    }
}

equipe.membrosDaEquipe();

console.log("\n\n");

//EcmaScript6

const equipe6 = {
    nome6: 'linguagens de programação',
    membros6: ['JavaScript','Java', 'C', 'Python' ],
    membrosDaEquipe6: function(){
        this.membros6.forEach(membro6 => {
            console.log(`${membro6} faz parte da equipe ${this.nome6}`);
        })
    }
}

equipe6.membrosDaEquipe6();