/*
                Break e continue

    Break : causa o desvio do fluxo saindo fora do laço em especifico que está sendo utilisado
    ele influencia dentro do laço (for) e (While) e (switch)

    O comando Break : não age em estruturas condicionais (iF).

    deve ser evitado no codigo pois pode trazer mais confusão do que claresa.

    continue: Ele interrompe a repetição atual e vai para a proxima repetição! porem não sai do laço e sim interrompe a execução atual indo para a proxima!
*/
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(`Quando encontrarmos o valor 5 vamos parar com o comando (break)`)


// Com Break
for (let i in nums) {
    console.log(`indice ${i} = ${nums[i]} `)
    if (i == 5) {
        console.log(`Valor 5 encontrado <<PAROU>>`)
        break
    }
}
//com o Continue
console.log(`\n\nAgora vamos usar o Continue no lugar de break `)
for (let c in nums) {
    console.log(`indice ${c} = ${nums[c]} `)
    if (c == 5) {
        console.log(`Valor 5 encontrado <<vamos continuar>>`)
        continue
    }
}
