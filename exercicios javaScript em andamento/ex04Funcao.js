// 04) ​Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

function restoDivi(dividendo,divisor){
    resultado = Math.floor(dividendo/divisor)
    resto = dividendo % divisor
    return `resto é : ${resto} e o resultado da divisão é : ${resultado}`
}
valor1 = 11
valor2 = 4
console.log(restoDivi(valor1,valor2))