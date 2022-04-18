/*
        Está em andamento Ainda não está pronto este algoritimo


        Sorteio de numeros sem repertir
*/
function sorteio(min, max) {
    const numSorteado = Math.random() * (max - min) + min
    return Math.floor(numSorteado)
}
let vet = []
let encotrado
let p = 0

while (p < 10) {
    vet[p] = sorteio(1, 10)
    encontrado = false
    for (let aux = 0; aux < p; aux++) {
        if (vet[aux] == vet[p]) {
            encontrado = true
            break
        }
    }
    if (!encontrado) {
        p++
    }
}
console.log(vet)

