/*
Pessoal existem muitas formas de se chamar uma função, você pode chamar uma função diretamente no escopo global, você pode chamar uma função a partir de um objeto e vou mostrar mais duas formas de se chamar uma função que é usando uma função chamada Call e uma função chamada apply uma função dentro de JavaScript É um tipo. E como tinha que ele tem outras funções dentro dele, a gente abriu a função B. Em alguns momentos agora ele vai ver duas Outras funções que são duas formas diferentes de se chamar de se executar uma função em JavaScript então para fazer isso. Eu vou criar um novo

para fazer isso eu vou criar um novo arquivo,  eu vou criar aqui um arquivo chamado com a call .de eu vou criar uma função, eu vou chamar essa função diretamente ou seja mais função a partir de um objeto só para gente revisar e vou chamar essa função a partir do col e de apply, para que você possa perceber a diferença tanto do call, quanto da apply é tão pequena diferença dos dois então vou criar uma função chamada enquete preço essa função vai receber dois parâmetros.


A diferença entre o call e o apply  é exatamente a diferença que passamos os parametros no momento de invocar a função a partir destes dois metodos

video aula : https://www.udemy.com/course/curso-web/learn/lecture/8946368#overview

documentação call mdn : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/Call

documentação apply : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/Apply

*/
function getPreco(imposto = 0 , moeda = 'R$'){
    return `${moeda} ${this.preco * ( 1 - this.desc) * (1 + imposto)}`
}

//vamos criar um  objeto chamado produto

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}
//temos que acesar o elemento preco e desc desta maneira. usando o global
global.preco = 20
global.desc = 0.1

console.log(getPreco())//==> podemos chamar uma função diretamente

console.log(produto.getPreco())//==> podemos chamar uma função atraves de um objeto que no caso aqui é o (produto) no caso aqui ele está usando o objeto produto para servir de contexto do this para ser resolvido dentro da função.

/*
Continuando outras duas formas que eu tenho para executar essa mesma função get preço é a partir do Call e do apply então eu poderia fazer o seguinte, como este carro vou criar aqui em outro objeto que vai ter preço e que vai ter desconto e a partir dessa objeto posso chamar a função de agente preço passando esse 
*/

//A sintaxe ficaria assim:

const carro = { preco:49990, desc:0.20 }

console.log(getPreco.call(carro))

//exatamente a mesma coisa serve para o apply
console.log(getPreco.apply(carro))

//a diferença de chamar a função atraves do call e do apply seria somente a passagem dos parametros.

//sendo que o primeiro parametro e o contexto e depois todos os parametros em que serão passados para a função


//usando o metodo call passamos diretamente nos parametros cada um dos parametros que serão passados na função  onde o primeiro parametro seria o contexto onde no exemplo é o carro
console.log(getPreco.call(carro, 0.17 , '$'))
//agora usando o metodo apply ! perceba que temos um array [] na passagem de parametros a diferença e está os pparametros usados na função getpreco vão dentro de um array.
console.log(getPreco.apply(global, [0.17 , '$']))

