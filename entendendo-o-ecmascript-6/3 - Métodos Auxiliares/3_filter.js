var alunos = [
    { nome: 'Rafael', idade: 27 },
    { nome: 'Mônica', idade: 31 },
    { nome: 'Daniel', idade: 0 },
    { nome: 'Miguel', idade: 5 }
]

/*ES5
var alunosDeMaior = [];

for(var i = 0; i < alunos.length; i++){
    var aluno = alunos[i];
    if(aluno.idade >= 18){
        alunosDeMaior.push(aluno);
    }
}*/

var alunosDeMaior = alunos.filter(function (aluno) {
    return aluno.idade >= 18;
});

var alunosDeMenor = alunos.filter(function (aluno) {
    return aluno.idade < 18;
});

console.log(alunos);
console.log(alunosDeMaior);
console.log(alunosDeMenor);