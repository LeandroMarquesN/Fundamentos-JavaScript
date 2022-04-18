//1ª podemos declara um a função de forma literal:

//exemplo:

function  nomeDaFunção(parametros){
	//escopo local
}

//2ª Armazenara em um varaivel.

const fun2 = function () { } // → etá é uma função anonima

//3ª Aramazenara um afunção dentro de um ARRAY []

const array = [function (a,b) { return a +b }, fun2, nomeDaFunção ]

 // podemos acessar  uma função apartir do nome dela 
// como podmos acessala pelo nome da constante onde está sendo referenciada.

console.log(array[0](2,3))
//note que estou passando os parametros de valor 2 e 3 

//4ª Armazernara um afunção dentro de um atributo de um objeto.

const obj  = {}
obj.falar = function () { return 'tudo bem Leandro!' }
console.log(obj.falar())

//5ª passar função como parametro para outra função.

//Está é uma possibilidade que inrriquece o nosso codigo 

function run(fun) {
	fun()
}

run(function () {console.log('Executando…') } )

//6ª um afunçãopode retornar uma função

function soma(a,b) {
	return function (c) {
		console.log(a+b+c)
	}
}

//para executara isso:

soma(2,3)(4)  // 2 é o parametro a e 3 é o parametro b e o 4 e o parametro c

//ou podemos fazer assim:
const cincoMais = soma(2,3)
cincoMais(4)
