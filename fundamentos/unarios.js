/*
    Operadores unarios
com incremento e decremento

*/

let num1 = 1
let num2 = 2

num1++ //forma pos fixada  acrescenta uma unidade ao valor da variavel
console.log(num1)
--num1 // forma prefixada  subtrai uma unidade ao valor da variavel num1 a forma preFixada tem uma precedencia maior que a forma posFixada
console.log(num1)
//aqui estamos fazendo uma verificação com operadores logicos para testar a ordem de precedência como podemos ver o resultado será verdadeiro pois na maneira preFixada  temos a adicão antes de ser feita a comparação e depois que comparado a varaivel num2 sofre um decremeto porem ja foi feito o teste logico
console.log(++num1 === num2--)
console.log(num1 === num2)
//Perceba que agora eles não serão mais iguais