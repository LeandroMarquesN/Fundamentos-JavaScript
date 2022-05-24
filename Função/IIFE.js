/*
A IIFE é uma prática muito utilizada para proteger o escopo global da poluição e conflito de nomes de variáveis. Além disso, permite aliviar um pouco a confusão de escopos de bloco/função dados pelo mecanismo de hasteamento de variáveis e funções do JavaScript

IIFE
Uma IIFE (Immediately Invoked Function Expression), cuja tradução literal para português é Expressão de Função Imediatamente Invocada, é uma função definida como uma expressão e é executada imediatamente após a sua criação.

veja mais  no MDN developer.mozila.org : https://developer.mozilla.org/pt-BR/docs/Glossary/IIFE

ou veja este site onde explica mais detalhado  : https://ricardo-reis.medium.com/express%C3%A3o-de-fun%C3%A7%C3%A3o-imediatamente-invocada-b706a7ee02f4

*/
//sintaxe desta função (IIFE = função de expressão imediatamente inocada.)
(function(){

   console.log(`Será executado na hora`) 
   console.log(`Foge do escopo mais abrangente! que 'e o globlal`)

})()
//Usar este tipo de função é uma maneira de fugirmos do escopo global 
//expressão-de-função-imediatamente-invocada
// Neste exemplo a variável add é referenciada como a função anônima que soma dois argumentos.

// Além disso, você pode executar a função imediatamente após criá-la:

let add = (function(a,b){
   return a +b
})(10,20)

console.log(add)