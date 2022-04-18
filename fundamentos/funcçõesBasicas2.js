/*
        Armasenando uma função a uma variavel
*/
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

// Armazenado uma função arrow ou flecha em uma variavel 
const soma = (a, b) => {
    return a + b
}
console.log(soma(5, 5))
// A flecha substitui a palavra reservada função


//================================================
//   Usando o return de uma maneira implicita 
//================================================
const subtracao = (a, b) => a - b
//Quando tenho uma funão com apenas uma sentença de codigo podemos utilizar a sintce desta maneira não usando chaves para a função!! pois temos todo o codigo em uma só linha.
console.log(subtracao(10, 2))

// Podemos diminuir ainda mais esse codigo quando temos apenas um parametro então eliminamos os parenteses.
const imprimir2 = a => console.log(a)
imprimir2('Legal!!')

