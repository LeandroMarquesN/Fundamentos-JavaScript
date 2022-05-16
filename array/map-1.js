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

//Agora usando o map vamos gerar um array que gere o dobro dos valores  dos elementos do array (nums) 

//vamos armazenar o resultado do nosso map em uma variavel.
//dentro do parametros de map vamos passar uma callback onde ela pode receber 3 parametros que é o proprio valor , o indice ou o array completo .
//vamos passar o elemto atual.

 let resultado = nums.map(function(e){
    return e * 2
})
//este codigo está mostrando que passei um array numeros que possui 5 posições e dentro do map foi passado a função que quero usar para que seja retornado o dobro do elemento do array nums.

//vamos mostrar o valor do resultado do map na tela.
console.log(resultado)


// ===========================================================

// Criando um novo exemplo de array e aplicando a função MAP
const nums2 = [10,20,30]

//Aqui temos uma função que retorna os valores convertidos onde temos o parseFloat que retorna um valor flutuante o toFixed PAra retorna um valor com 2 casas decimais e o repalce para fazer a substituição do ponto pela virgula.

//Abaixo criei arrow para passar como call back para função MAP

//Abaixo temos uma arrow onde temos um elemento elevado a 2
const potenc = e => e**2

//Abaixo temos uma arroe que vai converte para o formato dinheiro
const transDin = e => `${parseFloat(e).toFixed(2).replace(".",",")}`

//Abaixo criamos uma constante para armazenar o meu novo array onde estamos atribuindo o array nums2 chamando a função MAP onde dentro de map temos nossas call back que farão a transformação do nosso novo array.
const newNums2 = nums2.map(potenc).map(transDin)

console.log(newNums2)



