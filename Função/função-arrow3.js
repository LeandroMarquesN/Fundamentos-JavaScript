/*
    Funcção arrow  ou Função seta =>

    para fazer uso de uma função arrow devemos utilizar a extrategia de armazenar a função denro de uma constante.

    sintaxe : const nomeDaConstante = (parametro) => {bloco da função}

    neste exemplo vamos criar uma função onde vamos comparar  uma função normal com uma função arrow onde vamos trazer o this e seu comportamento


*/

let lineSeparação = function (){
    comparaComthis(global)
    console.log("==========================================================================\n")
}

//Criando uma função normal para uso de comparação com objetos.
let comparaComthis =  function (param) {
    
    console.log(`para este contexto a resposta é =  ${this === param}`)
}
lineSeparação()
//aqui vamos passar o objeto global e vamos ver se o this é extritamente igual ao this neste contesto do node .

/*
caso vc queira comparar o this com objeto global no navegador vc terá que passar como argumeto o window no lugar de global
pois no caso do browser o window é o objeto global. e no node o objeto global é chamado global.

devemos ter muito cuidado quando vamos trabalhar com o this dentro de uma função normal pois estaremos mechendo em um escopo global .
E aparentemente não fica claro que estamos mechendo no escopo global.
*/
//Exemplo 2 vamos usar a função Bind() para amarrar o this e a resposta ja não será a mesma da anterior. e no exemplo que vamos criar o this vai apontar para a constante com nome de obj que vamos criar.

const obj = {}
comparaComthis.bind(obj)//+. A função bind está amarrando  o this, agora o this  está sendo refernciado a constante obj.


console.log("Ja que o bind está referenciando o this ao obj então agora fazendo a comparação com o this ao obj globlal vamos ter o resultado =")

lineSeparação()

comparaComthis(global)

lineSeparação()

console.log("\nAgora o this está sendo referênciado a constante obj .")
comparaComthis(obj)

lineSeparação()

/*
Agora daqui pra frente vamos fazer a comparação em um função do tipo arrow
E vamos perceber que o comportamento do this em função arrow é totalmente diferente.
pois: a função arrow foi definida dentro de um modulo do node. cada arquivo do node representa um modulo

*/
//vamos criar uma segunda função chmada comparaComThisArrow 

let comparaComThisArrow = param => console.log(this === param)
//usando está função do tipo arrow e paçando o objeto global como parametro vamos ver que o this não aponta para o objeto global ou  seja retorna falso
comparaComThisArrow(global)

/*
Em outras palavra podemos concluir que usando a função do tipo arrow vc está mais seguro quando se faz o uso do this ja que o escopo global é um fator que deve ser levado em concideração e como o this no javaScript pode mudar de acordo com que o chama isso pode prejudicalo em seu codigo. 
*/
//Agora vamos comparar o this com o modulo do node e vamos ver que o resultado será verdadeiro.
comparaComThisArrow(module.exports)
/*fazendo um teste dentro de uma função arrow usando o bind para referenciar o this ao um obj vamos. E fazendo a comparação com this a este  objeto que tentamos referncialo vmos ver que o retorn será falso pois a function arrow não permite que o this seja referenciado a outro objeto que não seja os do seu modulo.
*/
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)/* retorno falso*/
comparaComThisArrow(module.exports)/* retorno verdadeiro*/