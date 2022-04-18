/*
        While
E uma estrututra comumente utilizada :
Quando não sabemos o numero total de repetições que serão executadas.

função random()= gera um valor enre 0 e 1
*/
function sorteioNumero(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
//criando está função ele vai sortear entre os parametros 

let opcao = 0
//Ele vai sortear numeros entre -1 a 10
//e so vai sair do laço quando for sorteado o numero -1 pois o laço vai se repetir enquanto opção for diferente de -1
while (opcao != -1) {
    opcao = sorteioNumero(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}
console.log(`Encontramos o -1 então acabou!!`)


