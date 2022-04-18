/*
        string
        "" ==>tudo que está dentro de  aspas duplas
        '' ==> tudo que está dentro de aspas simples
        `` ==>tudo que está dentro de crases
*/
const leandro = "Bonitão"

console.log(`O leandro é ${leandro}`)
/* 
a logica abaixo estamos usando um propriedade chamada c(charAt) é  coo se fosse um array! neste casso ele vai interpretara a minha string como um array onde cada letra será interpretada como um indice.
*/
console.log(leandro.charAt(0), leandro.charAt(6))
console.log(leandro.charAt(1), leandro.charAt(5))
console.log(leandro.charAt(2), leandro.charAt(4))
console.log(leandro.charAt(3), leandro.charAt(3))
console.log(leandro.charAt(4), leandro.charAt(2))
console.log(leandro.charAt(5), leandro.charAt(1))
console.log(leandro.charAt(6), leandro.charAt(0))
//==> exibe a letra que corresponde o indice o indice fica dentro dos charAt(colchetes) lembrando que a string começa com o indice 0

/*
Na logica  abaixo usei o  (for in ) para escrever na tela letra por letra onde peguei a varaiavel (leandro) que é do tipo string e fiz a estrutura de repetição percorrer.

use o depurador com f5 marcando a linha 19 como ponto de parada para que com f10 vc percorra passo a passo o algoritimo.
*/
for ( let i in leandro){
        console.log(leandro.charAt(i))
}
        


console.log(leandro.charAt(7))//=> ele vai retornar um valor vazio pois o  indice 7 não existe no valor da  string 
//======================================
// indexOf() => retorna o indice do caracter especificado no caso aqui é o B  que retorna o indice 0
//======================================
console.log(`Reotna o indice que contem a letra (B) : A letra está no indice : ${leandro.indexOf('B')}`)
console.log(leandro.indexOf('o'))
console.log(`A letra (t) corresponde ao index 4 da string Bonitão ${leandro.indexOf('t')}`)
//===================================
// substring(indice da string) :
// retorna o valor especificado
console.log(leandro.substring(1)) //=> vai escrever a string do indice indiante
console.log(leandro.substring(0, 3)) //escreve a string somente os indice que delimitão na


//===========================
//Função replace(valor , 'n')

console.log(leandro.replace('n', 'L'))
// substituimos a letra(n) pela letra (l)
console.log(leandro.replace(/\w/g, '*'))
//Ele vai substituir toda a string pela letra (L)
//menos o ã pois a letra a possui um ~ til. 
// caso troque o letra ã por a na variavel (leandro) vai dar certo

//===========================================
// POdemos converter uma string para um array 

console.log(`leandro , lavinia , livia`.split(','))
/*
split(',') => nesta função estamos mostrando o que vamos usar como separador para gerar o array 
poderiamos fazer assim tambem :
split(/,/)) e ele iria fazer a mesma coisa
isso é regex => expressões regulares
*/
console.log(`A função ToUppercase coloca as letras em caixa alta! O leandro é muito =>${leandro.toUpperCase(leandro)}`)
