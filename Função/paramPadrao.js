/*
    Estrategia para gerar valor padrao

    a primeira estratégia seria de utilizar o operador ( OU =||)
    isso resolve os problemas quando temos um parametro que retorne um valor falso resultando em null ou NAN 
*/
function soma1(a,b,c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(`Aqui o resultado será o valor determinado para os valores padrões das variaveis a, b,c setados na funcão soma1. \n resultado =  ${soma1()}\n neste exemplo vamos passar somente o valor do parametro (a) que vai  receber o valor de 3 onde o resultado será de \n Resultado = ${soma1(3)}\n Aqui vamos passar os 3 parametros (a=2,b=2,c=2) \n Resultado = ${soma1(2,2,2)}`)
//vamos ter um problema quando tivermos que passar os parametros com valor de 0 e este valor resolve em um valor falso sendo assim com determinamos caso o nosso parametros recebam um valor falso eles assumem o valor padrao. então por mais que passarmos o valor 0 para os parametros não vai adiantara caso estejamos usando o operador logico ( ou = ||)
console.log(`NEste exemplo  por maisque passamos o valor 0 aos parametros vamos ter como resultado o valor sa soma dos parametros setado como padrão \n Resultado = ${soma1(0,0,0)}`)
/*
======================================================
    Estrategias  para gereara valores padroes.
*/
function soma2(a,b,c){
 //a varaivel a sé irá receber o parametro caso o valor do parametro a seja extritamente !== diferente  e undefined . depois vem o operador ternario qu efunciona como um acondicional simples (? :) <<atenção>> podemos usara neste caso o operador != diferente também.  
    a = a !== undefined ? a : 1


// no exemplo abaixo estou querendo dizer: dentro do array arguments existe o indice 1 ja que a é representado pelo 0! se existir vamosusara o operador ternario ! se existir ? pegue o valor de b se não : pegue o valor 1  // <<atenção como estamos lidando com um array o arguments que existe em toda função para nos auxiliar ! neste caso se utilizarmos está estrategia no segundo argumento colocaremos o indice 2 no lugar de 1  respeitando a ordem de fato de um array lembrando que todo array começa em 0 .E caso vc esteja usando  está estratégia no primeiro argumeto devemos passara o indice 0 no lugar de 1
    b = 1 in arguments ? b : 1


//A extrategia abaixo é a mais segura a ser usada.pois nela vamos pegar o parametro que foi passado e testar se ele realmente 'e um numero. Se ele não for um numero ou seja is not a number IsNaN então recebera o valor padrão passado que possui o valor 1 se for um numero pode receber o parametro.
    c = isNaN(c)? 1 : c
    return a+b+c
}   
// Testando nossos parametrso padroes

// No caso abaixo não vamos passara nenhum parametro! perceba que não possui nenhum valor dentro dos parametros da função soma2().
console.log("Resultado da função soma2 sem parametros passados = ",soma2())


//Neste vamos passar o parametro somente do primerio elemento.
console.log("/Neste vamos passar o parametro somente do primerio elemento.resultado será = ",soma2(3))

console.log("Passando os 3 paramentros ! reusltdo =",soma2(1,2,3))

console.log("Passado valor 0 aos três parametros usando as estrateǵias acima teremos o valor 0 de fato ! Resultado = ",soma2(0,0,0))

// Agora vamos usar uma forma onde é a mais usada quando trabalhamos com numeros onde ela 'e a mais otimizada no momento de codar.

function soma3(a =1,b =1,c =1) {
    return a+b+c
}
console.log(soma3(),soma3(3),soma3(1,2,3),soma3(0,0,0))