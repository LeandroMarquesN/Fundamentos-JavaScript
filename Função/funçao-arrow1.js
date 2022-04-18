/*
Função arrow 
ela tem  2objetivos ser mais curta com uma sintaxe mais reduzida
E outro ponto forte é ter o (this) associado ao contesto no qual a funçao foi escrita.

*/
//crindo uma função normal
//neste caso vmos atribuir uma função a um a variavel 
let dobro = function (a) {
    return 2 * a
}
//Atribuindo a uma variavel uma função do tipo arrow. o que vamos fazer é trocar a palavra reservada Function pela ceta. um caracteristica que uma função arrow sempŕe será uma função anonima onde caso queira usara ela em outra situação devemos armazenala em uma varaivelou constante

dobro = (a) => {
    return 2 * a
}


//Podemos escrevela de uma maneira mais reduszida quando temos apena um unico parametro e tambem tirando as chaves do bloco colocando tudo em uma unica linha e tirando a palavra reservada return. pois quando retiramo as chaves de um afunção teremos um returno inplicito.
dobro  = a =>  2 * a

//mostrando na tela o valor da função dobro.
console.log(dobro(Math.PI))//o MAth tem que estar em letra maiuscula se não da erro.

//mais um exemplo de função arrow.
let ola = function(){
    return 'Olá'
}
//mudando a mesma função para uma função arrow.

ola = () => 'Olá'//caso queira colocara o bloco de chaves obrigatoriamente temos que colcar a palavra resevada (return)
//podemos escrever a mesma função desta maneira.
ola = _ => 'Olá' 
//As duas sintaxes estão corretas porem so não existe a sintaxe que iguinore os parenteses neste caso que estamos  tratando. ou seja se temos uma função que não temos parametros devemos colcar os parenteses vazios.
console.log(ola())
