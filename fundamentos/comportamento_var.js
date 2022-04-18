/*
Quando declaramos um variavel usamos as palavras reservadas (var) (let) (const) porem elas possui comportamentos diferentes.
ex: const => é uma constante e seu valor uma vez declarado não pode ser mudado

ja com var e let elas são semelhantes porem com um comportameto levemente  diferente quando se trata de escopo.

a palavra reservada var :
possui o escopo global e de função

*/
var numero = 1
{
    var numero = 2
    console.log(`Dentro = `,numero)
}
console.log(`fora =`,numero)