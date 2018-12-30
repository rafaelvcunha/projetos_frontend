var alunos = [
    { nome: 'Rafael', idade: 27 },
    { nome: 'Mônica', idade: 31 },
    { nome: 'Daniel', idade: 0 },
    { nome: 'Miguel', idade: 5 }
];

/*var alunoProcurado = [];

for(var i = 0; i < alunos.length; i++){
    var aluno = alunos[i];
    if(aluno.nome === 'Daniel'){
        alunoProcurado = aluno;
        break;
    }
}*/

var alunoProcurado = alunos.find(function(aluno){
    return aluno.nome === 'Daniel';
});

//find retorna apenas um unico resultado, no caso a primeira ocorrência.

console.log(alunoProcurado);
