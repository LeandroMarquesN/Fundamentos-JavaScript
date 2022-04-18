// tipos de Object em javaScripty

// Usando o par de chaves conseguimos criar um Object
/*em javaScripty posso atribuir e criar valores dentro do meu objetos dinamicamente
*/
const prodCel = {}
prodCel.iphone = 'iphone11'
prodCel.valor = 3000.00

//podemos aceessar os valores de dentro do object
console.log(prodCel)

//Ou podemos acessar um valor especifico no caso estamos acessando a classe valor.
console.log(`Esse é a class valor ==> ${prodCel.valor} de dentro do object prodCel `)

//===============================================
// outra maneira de criar objectos dentro de javaScript

const prodCel2 = {
    marca: "motorola",
    preco: 2000.00,
    modelo: "motoG11"
}
//podemos ter objetos dentro de objetos :
//como no exemplo abaixo:
const prodCel3 = {
    prodCel,
    prodCel2
}
console.log(`Este é o meu object prodCel3 ==> ${prodCel3}`)
console.log(prodCel3)
