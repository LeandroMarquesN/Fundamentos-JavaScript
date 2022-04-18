/* 
        Essa é um aestrutura muito pouyco explorada
        A grande diferença da estrutura while e da [do while] o teste logico fica no final da [do while] ou seja ela precisa aumenos de um a repetição para testar fazer o teste logico

        Diferente da estrutura While, o Do/While não é necessário atribuir um valor inicial para a variável opcao, ou seja, fazendo assim:

*/
function sorteioNumero(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao //somente iniciada a varaiavel, sem valor inicial

do {
    opcao = sorteioNumero(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log(`Encontramos o -1 então acabou!!`)