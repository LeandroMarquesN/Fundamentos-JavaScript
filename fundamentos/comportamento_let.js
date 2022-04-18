/*
a palavra reservada : let :
possui:
escopo global ,função e bloco

a let possui um escopo a mais que a var que so possui escopo global e função
*/


let numero = 1
{
    let numero = 2
    console.log(`Dentro = `, numero)
}
console.log(`fora =`, numero)
console.log(`Perceba que temo apenas uma variavel com o nome numero porem como dentro de um bloco  imprimimos o valor na tela com a declaração usando let ! siguinifica que dentro temos uma variavel numero com um valor e fora do bloco a nossa mesma variavel numero ja possui outro valor`)