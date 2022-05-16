// Objetos podem ser criados dinamicamente ou seja podemos adicionara e remover dinamicamente.
//Objetos é uma coleção dinamica de pares chaves/valor

//new é um operador onde podemos criar um objeto onde chmamos uma função pois Object é do tipo function e quando usamos um a função com o new temos uma função construtora e aparttir disto ele instancia um objeto.
const produto = new Object

//por ser dinamico podemos fazer a construção do objeto e seus atributos desta maneira usando a notação ponto.

produto.nome =  "cadeira"
//podemos usar uma notação que é parecida com o array onde usamos os colchetes.
produto[`marca do produto`] = 'Generica'

produto.preco = 220
console.log(produto)

//Podemos deletar alguns atributos dinamicamente tambem apartir do : Delete

//vamos deletar o preço e marca do produto
delete produto.preco
delete produto['marca do produto']
//mostrando o objeto produto na tela vamos ver que so existe o atributo nome : cadeira
console.log(`mostrando o objeto produto na tela `)

console.log(produto)