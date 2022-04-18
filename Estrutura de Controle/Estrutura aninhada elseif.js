Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}
//Nestá função se o numero for maior que inicio e menor que o final então retornara verdadeiro senao  retornara falso.

//No caso abaixo estamos usando a função entre() pra retornar um valor verdadeiro ou falso!
//Fazendo desta maneira  a operação relacional que fica dentro dos parenteses do if () será substituido por (nota.entre(parametros)) pois aqui dentro estamos chamando a funçaõ entre

const imprerimirResultado = function (nota) {
    if (nota.entre(9, 10)) {

        console.log('Quadro de Honra')

    } else if (nota.entre(7, 8.99)) {

        console.log('Aprovado!')

    } else if (nota.entre(4, 6.99)) {

        console.log("Recuperação")
    } else if (nota.entre(0, 3.99)) {
        console.log("Reprovado!!")
    } else {
        console.log('Nota invalida!!')
    }

    console.log('Fim')
}
imprerimirResultado(10)
imprerimirResultado(5)
imprerimirResultado(7)
imprerimirResultado(3)
imprerimirResultado(58)