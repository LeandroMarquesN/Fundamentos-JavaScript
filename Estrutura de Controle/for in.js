/*
        Estrutura de repetição (( FOR IN))
ele percorre os atributos de um array ou objeto.
não é um aforma tão interessante de percorrer um array.
ele percorre pelos indice e não pelos valores.
*/
//declarando o array cores.
cores = ["Azul", "vermelho", "Rosa", "laranja"]

for (let i in cores) {
    console.log(`indice : ${i}, contem a cor => ${cores[i]}`)
}
console.log(`************************************`)
// vamos percorrer um objeto com o (for in) agora com um objeto: è muito interessante usar desta forma para percorrer os atributos de um objeto

const pessoa = {
    nome: 'Ana',
    sobreNome: 'Silvia',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) {
    console.log(`indice : ${atributo} = ${pessoa[atributo]}`)
}
