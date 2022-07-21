/*
Dentro de um array temos algumas funções para ajudarmos a trabalhar
que são:

sort() ==> ajuda a ordenar o array

delete() podemos deletar um elemento passando seu indice

splice() ==>Ela serve tambem para adicionar elementos,
           Como ela serve podemos remover elemtos de um array.
           como tambem serve para remover e adicionara elementos ao mesmo tempo. dentro dos parenteses do slice o primerio elemento corresponde o indice que vc quer trabalhar ex slice(1) vamos trabalhara com o indice 1 
           pra excluir vamos colocar mais um parametro depois do indice que vamos trabalhar ex: splice(1,2)==> isso coresponde que vamos trabahar com o indice 1 onde vamos escluir 2 elementos  apatir do indice 1

           /O metodo Splice é um metodo muito flexivel onde coseguimos excluir elemento e adicionara elemento apartir do indice que queira trabalhar.

*/
let aprovados = ["bia","carlos","Ana","fabiana","maria","Daniel"]
//Aqui abaixo está os elementos não ordenados
console.log(aprovados)
//Aqui com o uso do sort() ja conseguiremos ordenara o elementos.
console.log(aprovados.sort())

//=======================================
//delete() podemos deletara um elemento passando seu indice
//vamos deletar o elemento da posição 2 do array que corresponde ao elemento Bia
delete aprovados[2]
//verificando se Bia foi relamente escluido
console.log(aprovados)

//note que agora o elemento do indice 2 que corresponde a bia foi escluido! porem o indice 2 ainda continua existe so que existe no tipo undefined.
console.log(aprovados[2])

//Função slice de um  array
// slice(3,2)==> isso corresponde que vamos trabahar com o indice 3 onde vamos escluir 2 elementos  apartir do indice 1
aprovados.splice(3,2)
console.log(aprovados)
//perceba que os elementos do indice 3 e 4 que corresponde ao elementos carlos e fabiana foram excluidos

//Para adicionara elementos usando o Splice vamos indicara o indice que vamos trabalhar e logo apos vamos indicar quando elemento queremos adicionar e apos vamos passar os elementos que vamos adicionar.
//Ex: aprovados.splice(3,2,"Elemento-novo-1","Elemento-novo-2") isso mos tra que apartir do ince 3 vamo sadicionara 2 elementos que serão os que estao acima.
aprovados.splice(3,2,"Elemento-novo-1","Elemento-novo-2")
//Perceba que agora foram adicionados os novos elementos apartir do indice 3 que corresponde a maria então ela foi escluida e os novos elementos foram incrementados.
console.log(aprovados)

//Agora caso não queira escluir  nenhum elemento basta colocar o "0" no parametro correspondente aos elementos que vamos escluir. colocando o "0" mostra que não vamos escluir nenhum elemento.
//Ex: Apartir do indice 5 vamos adicionar mais 1 elemento e não iremos escluir nenhum.
aprovados.splice(5,0,"Elemento-new-3")
//perceba que agora foi adicionado o elemento 3 apartir do indice 5 não escluido nenhum
console.log(aprovados)
//O metodo Splice é um metodo muito flexivel onde coseguimos excluir elemento e adicionara elemento apartir do indice que queira trabalhar.

