/*
Estrutura swithc case 
seleção multiplas
floor() é uma seleção que arredonda para baixo.
break ==> temos que colocar está palavra reservada para que os outros case abaixo não sejam repetidos.
Math == usado para operação que envolve numeros ou aritiméticas.

*/
//Aui temos uma constante imprimirResultado recebendo uma função!
const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log("Aprovado")
            break
        case 6: case 5:
            console.log("recuperação")
            break
        case 4: case 3:
            console.log("reprovado!!")
            break
        default:
            console.log("<<invalido!!>>")
            break
    }
}
imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(2)
imprimirResultado(4)