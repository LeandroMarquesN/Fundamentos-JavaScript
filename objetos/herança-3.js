/*
Nesta aula vamos falar sobre uma função do Objeto

         Obeject.crreate

E vamos ver a estrutura de repetição:
            For in


*/
//vamos começar usando o Object.create
//1ª vamos criar uma classe "pai" onde vai ter os atributos : nome e  corCebelo

const pai = { nome: 'Pedro', corCabelo:"Preto"}

//Agora vamos criar um objeto "filho apartir do Object.create"
//Onde o primeiro parametro:será o objeto "pai" e apartir disso ele criou um objeto novo tendo como prototipo o objeto "pai" agora ele não vai mais apontar para o prototipo sendo o Object.prototype e sim o objeto "pai"
const filha1 = Object.create(pai)
//E neste caso ja posso alterar o nome dafilha dinamicamente.
filha1.nome = "Ana"
//E como o "pai"e o prototipo de filha1 naturamente ela vai herdar os atributos do pai que é de fato o seu prototipo então vamos passar a cor de cabelo.
console.log(`A filha herdou a cor de cabelo do pai que é  = ${filha1.corCabelo}`)
//Uma obcervação é que a função do Object.create passando o primeiro parametro como "Objeto pai" O sistema vai procurar no prototipo do pai o atributo Corcabelo.

//Agora vamos criar um outro objeto chamado de filha2 passando o pai como sendo também o seu prototipo
//E o segundo parametro do objeto filha2  será um objeto onde vai conter todos os atributos que queremos adicionar (como as propriedades se ele pode ser enumerable , writable ,frezze, value etc...)
const filha2 = Object.create(pai,{
    //Aquidefinindo os parametros:
    nome:{
        value:"Bia",//valor do atributo "nome"
        writable: false,//nao podera ser modificado
        enumerable:true
    }
})
//Agora como filha2 herdou os atributos do "pai" ela possui o atributo "nome" com algumas propriedades onde essas prorpriedades estão dentro  das chaves azuis.

//mandando mostrar na tela
console.log(filha2.nome)//vamos ver que o valor foi de fato setado.
//Agora vamos tentar mudar o valor do atributo "nome" da filha2 e não vamos conseguir pois a propriedade writable: false não permite. 
filha2.nome = "julia"
//agora vamos mostrar na tela 
//e como filha2 tem como prototipo o "pai" ela herdou o atributo "corCabelo: preto" mas o seu nome não poderá ser mudado para "julia" como tentamos na linha 40
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

//Agora vamos mandar mostrar as chaves do objeto filha1 e perceba que não adicionamos nenhum atributo a filha1 ela somente herdou os atributos do pai
console.log(Object.keys(filha1))
//O mesmo vamos faer com filha2
console.log(Object.keys(filha2))
//caso o enumerable: false o atributo nome do filha2 não iria aparecer. faca o teste mas depois troque para true

//Agora vamos percorrer as chaves do objeto filha2 com o = for (let key in filha2){ }
//E assim vamos ter todos os atributo impressos
for (let key in filha2) {
    console.log(key)
}
//mas vamos fazer um teste para saber se o atributo pertence de fato a ela e para isso vamos usar o (hasOwnProperty()) e vamos usar tambem um operador ternario  ? : que funciona como um aestrutura consicional
for (let key in filha2) {
   filha2.hasOwnProperty(key)? console.log(key) : console.log(`Por herança: ${key}`)
}
//Está é uma forma que temos se determinado atributo  que estamos usando é realmente de fato daquele objeto ou se ele foi herdado