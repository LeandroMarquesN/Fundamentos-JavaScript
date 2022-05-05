/*
01)​ Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.


*/
function operaçõesmatematicas(primeiroValor, segundoValor){
    soma = primeiroValor + segundoValor 
    subtração = primeiroValor - segundoValor
    multiplicação = primeiroValor * segundoValor
    divisao = primeiroValor / segundoValor

    return `A soma é ${soma} a subtração é ${subtração} a multiplicação é ${multiplicação} e a divisão é ${divisao}` 
}
valor1 = 4 
valor2 = 2

console.log(`Os resultados das operações matematicas entre os valores  ${valor1} e ${valor2} é : \n`)
console.log(operaçõesmatematicas(valor1,valor2))