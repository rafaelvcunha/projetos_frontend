//ES5

var nome = 'Rafael';
var idade = 27;
var endereco = 'avenida do taboão';

var div = '<div>';
div += '<p><b>Nome:</b>' + nome + '</p>';
div += '<p><b>Idade:</b>' + idade + '</p>';
div += '<p><b>Endereco:</b>' + endereco + '</p>';
div += '</div>';

console.log(div);

//ES6

const div2 = 
`
<div>
    <p><b>Nome:</b> ${nome} </p>
    <p><b>Idade:</b> ${idade} </p>
    <p><b>Endereco:</b> ${endereco} </p>
</div>    
`;

console.log(div2);