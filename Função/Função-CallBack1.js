/*
referencia :https://developer.mozilla.org/pt-BR/docs/Glossary/Callback_function

IN THIS ARTICLE
Aprenda mais
Função Callback
Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

Aqui está um pequeno exemplo:

function greeting(name) {
  alert('Olá ' + name);
}

function processUserInput(callback) {
  var name = prompt('Por favor insira seu nome.');
  callback(name);
}

processUserInput(greeting);
Copy to Clipboard
O exemplo acima é de uma synchronous callback, uma vez que é executada imediatamente.

Note, no entanto, que callbacks são normalmente utilizados para continuar a execução do código após uma operação asynchronous ser terminada — essas são chamadas asynchronous callbacks. Um bom exemplo são as funções callback executadas dentro de um bloco .then() encadeado ao final de uma promessa após essa promessa ser cumprida ou rejeitada. Essa estrutura é usada em muitas APIs da web modernas, como a fetch().
*/
//Ex 1 : começaremos criando um array

const fabricantes = ["Mercedes","Audi","BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}
fabricantes.forEach(imprimir)
//ForEach é uma função que está armazenada dentro de um array e como a nossa constante fabricantes 'eum array no spodemo sfazer uso da função ForEach
//E fazendo desta maneira para cada elemento do array ele vai chamar a função imprimir.
//E o forEach  vai passar como parametro o nome e o indice.

//Poderiamos fazer desta maneira que vamos escrever abaixo porem aqui não vamo simprimir os indices

fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})
console.log("\n")

//podemos faze com uma função arrow
fabricantes.forEach(fabricante => console.log(fabricante))
//O callback nada mais é do que nõs passarmos uma função e essa função será chmada qunado o evento acontecer
