/*
Dentro de javaScript array ele é um objeto.
so que no lugar dele oganizar seus atributos apartir de chaves ele organiza os apartir de um indice uma estrutura indexada começando do 0, sendo que o primeiro elemento de  dentro de um array é de indice 0  .
se usara um operador new dentro de uma função o resultado é um objeto.

Quando declaramos um array dentro de uma constante nãos siguinifica que não conseguiremos mudar os dados do array  
quando fazemos uma delcaração de um array dentro de um aconstante mostra que estamos aponstando o endereço de memoria onde não podera ser mudado ja os elementos de dentro do array que foi declarado dentro deum aconstane podem sim ser mudados.

*/
//Analizando os tipos.

console.log(typeof Array, typeof new Array,typeof [])

//Um array dentro de javaScript é uma estrutura dinamica ele cresce e diminui dinamicamente.
//E pelo fato de JavaScripty se uma linguagem fracamente tipada podemos colocara em seu dados dos tipos o mais variados possiveis.ou seja podeos ter dados como boleanos, string, real , inteiro , dentro de um mesmo array.
//O array é uma estrutura Heterogênia.
//Porem a boa pratica dis que devemos trabalhara com dados Homogêneoss dentro de um array.

//Criando um array de uma forma que não é tão recomendada.
let aprovados = new Array('Bia','Carlos','Ana')

//imprimindo o array
console.log(aprovados)

//Criando um array : notação literal que é a mais recomendada.
aprovados = ['Bia','Carlos','Ana']

//Acessando o indice 0 de um array . onde vai imprimir o nome Bia
console.log(aprovados[0])

//Acessando o elemnto 1 do  array que corresponde ao carlos
console.log(aprovados[1])

//acessando o indice 2
console.log(aprovados[2])

//Agora vamos acessar um indice que não existe dentro do array que no caso seria o 3, le retorna undefined, em outras linguagens retornaria um erro mas em javaScript ele retorna um tipo indefinido.
console.log(aprovados[3])

//Adcionando um novo elemento dentro de um array
//desta maneira é mais comum vc substituir um elemento apartir do seu indice
aprovados[3] = 'Paulo'

//Adicionando de um novo elemento de um outra forma
//essa é a mais usual
aprovados.push('Leandro')

//Acessando o tamanho do array,desta maneira ele irá retornar o tamnho do array.
console.log(aprovados.length)

//Caso venhamos adicionar um elemento onde seja muito maior que o tamanho de nosso array o javaScript vai adcionar este elemento e os elementos que estão entre o elemento de indice 9 e os anteriores retornaram undefined, mas como o javaScript é um uma linguagem fracamente tipada ele permite.
//Ex:nosso array tem 5 posições porem vamos adicionar um elemento no indice 9
aprovados[9]='Rafael'
console.log(aprovados)

//perceba que no codigo abaixo estamos verificano se as posições 5 6 7 8 estão indefinidas. e o codigo vai retornar verdadeiro pois de fato elas existem dentro do array porem não foram definidas ainda.
console.log(aprovados[5] === undefined)
console.log(aprovados[6] === undefined)
console.log(aprovados[7] === undefined)
console.log(aprovados[8] === undefined)