/*
Criaremos uma função onde criara protduto onde vai receber o nome e o preço e como é uma função factori ela retorna um objeto.
e nesse casso não precisamos colocar os dois pontos no atributo do objeto pois ja demos o mesmo nome que o parametro.
mas poderia colocar se quisesse.

este é um padrao muito simples porem não deixa de ser muito usado na linguagem.

posso ter tambem uma factory que retorna funções tambem e não so objetos com seus parametros.

posso ter também uma facatory que retorne objetos que possuam em seus atributos funções 

saõ padrões validos dentro da linguagem.

*/
function criarProduto(nome,preco,desconto = 0.1){
    return {
        nome:nome,
        preco,//deixei estes sem os dois pontos para exemplificar que da certo. ja que damos os mesmos nomes que os parametros
        desconto
    }
}

const produtoA = criarProduto('carro',30.000,0.2)

const produtoB = criarProduto('mesa',20.000)//deixei este sem o parametro do desconto para exemplificar  o valor padrão 0.1 deixado com padrão nos parametros.

console.log(produtoA)
console.log(produtoB)

//posso criar o produto desta maneira chamando a função diretamente.
console.log(criarProduto('celuar',500.00))

