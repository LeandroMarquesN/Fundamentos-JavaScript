/* 
            Destructuring em Função

O iteressante é usar o destructuring no hambito de uma função !
como um parametro de uma função 

Curiosidade : Math => Um objeto intrínseco que fornece funcionalidades matemáticas básicas e constantes.

vamos criar um programa que crie numeros aleatorios entre os parametros que passarmos!

random ==> Retorna um número pseudoaleatório entre 0 e 1.

Floor ==> Retorna o maior inteiro menor ou igual ao seu argumento numérico.

*/
//Vou criar uma função e dentro dos parenteses vou passar o operador destructuring {} como parametro isso siginifica que vou passar um objeto para a função e dentro da minha função random invés de acessar o objeto ponto min objeto ponto max eu quero que ele ja tire de dentro do objeto o atributo min e max me entregue  já prontos sem que precise usar a notação ponto para acessar de dentro do objetos
//Estou colocando o valor max= 1000 como padrão  e min = 0
function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//para testar vou chamar a função rand()
console.log(rand({ max: 500, min: 3 }))
//Poderia criar este codigo desta maneira tambem ! pois aqui estou criando um objeto.

//const obj = {max:50, min:40}
//console.log(rand(obj))
//ou poderiamos ecrever desta maneira substituindo a sentença do codigo da linha 24 
console.log(rand({ min: 990 }))
console.log(rand({}))// Neste caso estamos passando nenhum parametro que por padrão ja declaramos na função dentro do destructuring um valor padrao min:0 e max:1000
