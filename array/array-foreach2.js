/*
Vamos agora implemntar o foreach em nosso codigo para internalizar o conhecimneto

*/
/*================================================
  Agora vamos iplementar um metodo chamado de forEach2 onde vamos chamalo para fazer o memso que o foreach faz .

  vamos criar dentro de prototype de um array a função foreach2 pois ela não existe dentro do javaScript

  agora vamos associala a função que eu quero que de fato seja a função que vai percorrer o array
  ou seja esta função recebe o que como parametro e lembramos que está função recebe uma função call back  podemos chamala do que quisermos aqui neste escercio vamos chamala de call back mesmo.

  E e esta função call back tem que ser uma função de fato 

  E dentro desta função foreach2 vamos precisar percorre o array e vamos fazer isso usando um laço (for)
  no caso o this está acessando o array dentro de uma função que pertence ao prototype ou seja acessamos a instancia de um array apartir da variavel (this)

  E dentro do for vamos passar a função callback passando 3 parametros
  1º primerio será o propreio valor
  2ª será o indice
  3ª será o array em questão

*/
Array.prototype.forEach2 = function(callback) {
    for(let i =0 ; i < this.length; i++) {
        callback(this[i],i,this)
    }
}


//Cirando um array e colocando dentro de um a constante.
const campoHarmonicoDeDo = ['Do','Re-m','Mi-m','Fa','So','La-m','Si-dim']


//Mostrando uma Frase de Apresentação
console.log(`O campo Harmonico de Dó maior é composto pelas nostas.`)

//criando a função call back para percorrer o cada elemento do array campoHArmonico
const callbackDeDo = (nota,indice)=> console.log(`${indice+1}) ${nota}`)
campoHarmonicoDeDo.forEach2(callbackDeDo)


