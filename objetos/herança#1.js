/*
site referencia : https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Classes_in_JavaScript

site referencia : https://medium.com/trainingcenter/heran%C3%A7a-e-prot%C3%B3tipos-no-javascript-2c1e60e005a2 

Herança. Você com certeza já deve ter ouvido falar desta palavrinha que aparece em praticamente todos os livros e todas as aulas de programação orientada a objetos.

Em OOP, herança refere-se a habilidade de um objeto acessar métodos e outras propriedades de outro objeto. Estes objetos então herdam essas informações de outros objetos e podem utilizá-las da forma que preferirem. No Javascript não temos uma herança propriamente dita, mas ela funciona através do que são chamados de protótipos, esta forma de herança é conhecida como herança prototípica (ou prototypal inheritance).

*/
//vamos criara 2 objetos usando a notação literal de objetos que se faz o uso das chaves{} inves de usarmos a palavra reservada "new Object"
const ferrari = {
    modelo: 'F40',
    velMAx: 324
}

const volvo = {
    modelo:'V40',
    velMax: 200
}
//agora vamos fazer algumas verficações referente a existencia e para onde aponta os prototipos
console.log(ferrari.__proto__)
//Apartir do "__proto__"eu consigo acessar que  é o prototipo deste objeto onde na hierarquia seria chamado "obejteo -pai"

//fazendo mais um teste vamos ver se o "prototipo" de ferrari é etritamente igual a "Object.prototype"
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
//agora vamos ver se o "Object.prototype possui um __proto__ ou prototipo "
console.log(Object.prototype.__proto__)
console.log(Object.prototype.__proto__=== null)
//O prototipo do Object  prototype é nulo por que não existe 
//a forma qu enos acessamos os prototipo de um objeto criado e usando o "__proto__"

//agora vamos criar uma função e fazermos alguns teste
function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto, typeof Object.prototype)
console.log(Object.prototype, MeuObjeto.prototype)