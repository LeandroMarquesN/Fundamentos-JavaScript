/*
      Operador destructuring : é um operador de desistruturação ele tira da estrutura alguma coisa.
     estrutura pode ser um objeto.

     ele tira um atributo do seu objeto 
     podemos fazer o mesmo com os arrays

     quando estamos trabalhando com objetos usamos {}
     E quando estamos trabalhando com arrays usamos colchetes []

     É um recurso que foi introduzido no ES2015
     
     vamos trabalhar com arrays então usaremos Colchetes[]

*/

const [a] = [10]

console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
// o n2 foi iguinorado  o n3 corresponde ao 9 o n4 foi iguinorado o n5 não foi definido e o n6 recebe o valor padrao = 0 o n1 seria o 7
console.log(n1, n3, n5, n6)

//===================================================
//   Um array pode ter outro elementos do tipo array
//===================================================
const [, [, fodaSe]] = [[5, 8, 8], [9, 6, 8]] //=> aqui eu tenho um array que é composto por 2 arrays
console.log(`Este é o segundo elemento do segundo array que está dentro de um outro array que possui o valor : ${fodaSe}`)
/*
o primeiro elemento foi iguinorado o segundo elemento é um array dentro deste array estou iguinorando o primerio elemento e extraindo o segundo elemento do segundo array 
*/