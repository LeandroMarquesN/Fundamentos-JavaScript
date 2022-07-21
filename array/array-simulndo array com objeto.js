/*
    Vamos criar um objeto e dentro do objeto vamos criar seus atributos simulando um array

*/

const quaseArray = {0:'Rafael', 1:'Ana',2:'Bia'}
console.log(quaseArray)
//perceba que de fato ele é um objeto

//Agora vamos definir uma propriedades para este objeto
Object.defineProperties(quaseArray,'toString',{
    value: function() { return Object.values(this)},
    enumerable:false
})
//No objeto também temos essa forma de acessar os atributos pelos colchetes
console.log(quaseArray[0])

const meuArray = ['Rafael','Ana','Bia']

console.log(quaseArray.toString(),meuArray)