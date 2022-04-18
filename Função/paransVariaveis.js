/*
Nesta function usei o array (arguments). Ele é um array vazio  que toda função possui para nos ajudar .neste exemlo estamos acumulando  os parametros passados  na variavel 

*/
function soma() {
	let soma = 0
	for (i in arguments) {
		soma += arguments[i]
	}
	return soma
 }
console.log(soma())
console.log(soma(1))
console.log(soma(1.1,2.2,3.3))
console.log(soma(1.1,2.2,"teste"))
console.log(soma("a","b","c"))