/*
map é um afunção do array.
associado a ele dentro dele existe um laço qu seá executado.
E e ele serve para fazer um transformação no array.
Então a ideia seria mapeara um array para um outro array do mesmo tamanho so que com dados transformados. 
Em regra um aMap serve para transformara um array em outro array.
caso tenha um array de 6 elementos o resultado final so map será um array de 6 elementos.

*/
//exemplificando criaremos um array de numeros

const nums = [1,2,3,4,5,]

//Este exemplo funciona para que o map returne o dobro do elemento do array nums
let resultado = nums.map(function(e){
    return e * 2
})
console.log(resultado)

//Lembrando um metodo que passamos para um Map ele tem que ter um retorno.
//E lembrando em uma função do tipo arrow => Ela possui um returno implicito.

//Criaremos 3 funções que passaremos como callback para função map.

const soma10 = e => e + 10
//no caso acima temos uma função onde recebemos o elemento. Onde o elemento recebe ele mesmo recebendo 10 e returno

const triplo = e => e * 3

const paraDinheiro  = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

//nocodigo acima temos uma constante que recebe uma função do tipo arrow e dentro do nosso template String temos uma função parceFloat para transformar o tipo em  float  temos tofixed(2) para colocar em 2 casas decimais e o  replace('.',',')para susbstituir o ponto por virgula

//Estaremos utilisando está funções  encadeadas uma após a outra utilizando a função MAP

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(`Mostrando o resultado dos maps com valores trandformados.`)
console.log(resultado)