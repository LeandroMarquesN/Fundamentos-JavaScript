//video aula : https://www.udemy.com/course/curso-web/learn/lecture/9211222#overview 
/*
Em node um arquivo representa um modulo
modulo fica visivel apenas dentro do modulo para que vc consiga escrever algo no arquivo node e consigamos tornar isso publico ou disponivel para outro arquivo temos exportar existemvariass maneiras de se fazer isso existem 2 padroes ComunJs usado no NOde

*/
//1ª maneira :Formas de se exportar : desta maneira o codigo abaixo pode ser acessado emoutro arquivo
this.ola = 'Fala Brother!! Blz!!'
exports.a = 'Faala Brothers !! BLz Amigos!!'

//2ª forama :usando a palavra reservada exports onde um determinado atributo resebe um valor
exports.bemVindo = 'Bem vindo ao NOde Parceiro!!'
//NOte que tanto this ou exports sã objetos e objetos são criados por um conjunto de chave e valor dinamicas

//3ª maneira de fazer a exportação de um modulo:

module.exports.ateLogo = 'Até logo proximo exemplo!!'


//Agora  ja que exportamos os nosso codigos vamos cirar mais um arquivo .js e para que ele possa importar esses codigos!