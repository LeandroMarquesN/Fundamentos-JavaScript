/*n

        Destructuring Com função em arrays

E a mesma ideia do  programa de objeto onde ele sorteia um numero aleatorio de acordo com os parametros que usamos para determinar o valor min e o  valor max.
onde dentro dos parenteses da função forneci dentro do destructuring para arrays utilizando colchetes os valores padrões onde será usado caso não seja passsado nenhum parametro 

*/
function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand([50, 40]))
console.log(rand([995]))
console.log(rand([, 10]))
console.log(rand([]))