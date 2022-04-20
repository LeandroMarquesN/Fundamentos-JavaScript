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
//dentro do parametros de map vamos passar uma callback onde elea pode receber 3 parametros que é o proprio valor , o indice ou o array completo .
//vamos passar o elemto atual.

 let resultado = nums.map(function(e){
    return e * 2
})
//este codigo está mostrando que passei um array numeros que possui 5 posições e dentro do map foi passado a função que qeuro usar para que seja retornado o dobro do elemento do array nums.

//vamos mostrar o valor do resultado do map na tela.
console.log(resultado)

