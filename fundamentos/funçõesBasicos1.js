/*
Funções sem retorno :
dentro dos parenteses temos os parametros que vamos receber 
as varaiveis criadas dentro de uma função são variaveis locais!
siguinifica que essa variavel só existe dentro do campo delimitado com chaves da função especifica!!
diferente da variavel global!!

*/
function mostrarSoma(a, b) {
    console.log(`|Esté é o resultado => ${a + b}`)
}
//aqui vamos chamar a função mostrarSoma()
mostrarSoma(2, 3)
// caso os parametros não seja informado ele vai retornar um NAM not a number ou caso vc mostre mais parametros do que informado na função ele só vai usar o que foi determinado.

//===========================================
//    Função com retorno
//===========================================
function somaMostrar(a = 1, b = 1) {//Quando atribuo um valor para variavel dentro dos parentes estou mostrando que o valor declarado será o padrão caso não seja informado nada
    return a + b
}
console.log(somaMostrar(5, 3))
console.log(somaMostrar(5))
console.log(somaMostrar())