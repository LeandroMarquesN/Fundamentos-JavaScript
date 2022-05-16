/*
melhoria na notação literal de objetos

*/
//criaremos constantes para atribuir em um objeto
const a = 1
const b = 2
const c = 3
//metodo antigo teriamos que fazer desta maneira
const obj1 = { a: a,b: b, c: c}
console.log(obj1)

//hoje nao precizamos fazer desta maneira podemos fazer da maneira que está abaixo:
//ex:
const obj2 = {a,b,c}
//mandando imprimir na tela vamos perceber que eles são exatamente iguais
console.log(obj1,obj2)

//Aqui vamos criar um atributo chamado "nota" que está armazenado na constante "nomeAttr" 
const nomeAttr = 'nota'
//logo abaixo temos o valor do atributo "nota" que esta armazenado na constante "valorAttr"
const valorAttr = 7.87

//Abaixo seria o metodo antigo de criar um objeto aplicando em seus atributos os valores de uma variavel ou constante.

const objj3 = {}
objj3[nomeAttr] = valorAttr

console.log(objj3)

//Agora conseguimos criar um objeto  destá maneira fazendo a aplicação dos atributos e seus valores usando as constantes ou variaveis e atribuindo ao objeto

const obj4 = {[nomeAttr]:valorAttr}
console.log(obj4)

//Outra mudança na notação literal de objetos foi como definir uma função em um objeto literal .
//A forma antiga é aforma chave e valor que é padrão
//Ex:
const obj5 = {
    função1: function() {
        //...E aqui colocamos o que quizer
    },
    //Da forma nova do EcmaScript 2015: nos tiramos a palavra function e tiramos os dois pontos
    funcao2() {
            // ...
    }
}
//Exibindo o obj5 vamos ver que ele possui 2 funções

console.log(obj5)