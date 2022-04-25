/*
nets arquivos estaremos trabalhando a diferença de se trabalhar sem o uso de callback e depois com o uso de callback

onde teremos um array de notas onde faremos um outro array seguindo uma condição

onde iremos extrair notas menores que 7

*/

//criando o array notas
const notas = [7.7 , 6.5 , 5.2 , 8.9 , 3.6 ,7.1 , 9.8 ]

//sem uso de callback 
//criaremos um array vazio notasBaixas[]
const notasBaixas = []
//criaremos um laco for para percorrer o array notas[] e o (push) para adicionarar a nota baixa no array notasBaixas
for (let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
//imprimindo o array notasBaixas
console.log(notasBaixas)
//mostrando o total de  notas abaixo de 7
console.log(`Ao todo tivemos um total de ${notasBaixas.length} notas abaixo de 7 `)

//Agoras vamos usar o callback e para conseguirmos construir um novo array com as notas baixa usaremos a função (filter) para ajudar. 
//pois filter 'eum a função que filtra elementos de um array em cima de um criterio que será um afunção callback que retornara os dados que estão dentro dacondição imposta

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
//note que aqui fazendo o uso da callback conseguimos diminuir o codigo pois não precisamos usar nenhuma extrutura de repetição e nem de condicional pois dentro do filter já existem estás funções implicitamente
console.log(notasBaixas2)
console.log(notasBaixas2.length)

//Deixando ainda menor o codigo fazendo o uso da arrow

const notasBaixas3 = notas.filter(nota => nota < 7)
//perceba que dentro dos parenteses de filter ele está recebendo uma callback que no caso aqui usamos uma função arrow
console.log(notasBaixas3)
console.log(notasBaixas3.length)


//poderia ser escrita da maneira abaixo que daria certo tambem
const notasBaixas4 = notas.filter((nota) => {nota < 7})

console.log(notasBaixas4)
console.log(notasBaixas4.length)

//podemos colcoara a função callback dentro de uma constante e também daria certo
const calllback = (nota) => {nota < 7}
const notasBaixas5 = notas.filter(calllback)