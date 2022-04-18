/*
"This" e a função Bind.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>O bind()método cria uma nova função que, quando chamada, tem sua palavra- this chave definida para o valor fornecido, com uma determinada sequência de argumentos precedendo qualquer fornecida quando a nova função é chamada.

*/
//Aqui estamos usando o this em um contesto mais voltado para orientação voltada ao obejeto onde estamos acessando o objeto saudação atraves do (this)
const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}
//Vamos Executar
pessoa.falar()

//Executando da maneira abaixo vai eme jerara um erro onde vai apresentara undefined.pois aqui temos um conflito entre a programção funcional e a programação orientada ao objeto.
const falar =pessoa.falar
falar()

//Para resolver este problema vamos fazer uso da funçao (Bind)que é uma função de uma funçao. onde vamos passar como parametro  a constante (pessoa)O Bind nos passamos objeto no parametro no qual queremos que seja resolvido o this. Agora o this vai ser pessoa pois estamos passando ela como parametro para a função Bind(pessoa)

const falarDePessoa = pessoa.falar.bind(pessoa)
//executando vamos ter o resuntado.
falarDePessoa()