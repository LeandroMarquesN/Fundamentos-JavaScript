/*
Dentro do Objeto temos algumas funções :
pois um objeto possui atributos que são compostos por "chaves" ="keys" e "valores"=="values"

Como acessar suas chaves == "keys" ou valores == "values"
*/
//Criando o objeto "Pessoa" para exemplificara n aula de funções do objeto
const  pessoa = {
    Nome :"Leandro",
    Qualidade :"Muito inteligente",
    Peso:`${80}kg`,
}
//vamos acessar somente as "Chaves" do atributo 
console.log(Object.keys(pessoa))
console.log("\n")
//Agora vamos acessar somente os valores dessas chaves.
console.log(Object.values(pessoa))
console.log("\n")
//Podemos pegar uma lista tanto das chaves quanto os valores onde vai me retornar um array desses registros ou "enteries".
console.log(Object.entries(pessoa))
console.log("\n")
//podemos percorrer estes arrays criados usando o map ou o forEache
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]} => ${e[1]}`) // com essa nomenclatura "`${e[0]} => ${e[1]}" consigo acessar a possição do array 
})
console.log("\n")
//Podemos perccorer o array criado pe enteries e usar o foreach para percorrelo e passar o elemento que vai ser exibido.
Object.entries(pessoa).forEach(e =>{
    console.log(`${e[1]}`)//note que na possição e[1] fica os valores dos atributos
} )
console.log("\n")
//Podemos tambem usar o operador destructuring para acessar a "chave" e o  "valor" do objeto onde usando o destructring estamos desistruturando os elementos de um array.
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} => ${valor}`)
})
console.log("\n")
//podemos definir uma propriedade de um objeto, podemos definir algumas caracteristicas de uma propriedade ex: a propriedade em questão pode ou não ser alterada, a propriedade ficara ou não visivel quando fazermos Object.keys 
//Ex:
Object.defineProperty(pessoa,'dataNascimento',{
      enumerable: true,//pode ser numerada
      writable: false,//não pode ser modificda
      value:'18/08/1984',//atribuindo o valor para a variavel onde não poderá ser modificado.
})
//executando
console.log(pessoa.dataNascimento)
console.log("\n")
//caso eu tente mudar o valor do atributo dataNascimento ele nao poderá ser mudado pois foi definido no Object.defineProperty(pessoas,"dataNascimento") que ele não pode ser moodificado com o atributo "writable : false"

//ex: tentando mudar o valor da dataNascimento:
pessoa.dataNascimento = '01/01/01'
console.log(pessoa.dataNascimento)
//note que mesmo que tenha tentado atribuir um novo valor a dataNascimento com o valor ="01/01/01" ele mostrou o valor que tinha atribuindo anteriormente.

//quando listamos ele vai permitir passando o atributo dataNascimento pois definimos isso no definePropety com enurable: true
console.log("\n")
console.log(Object.keys(pessoa))
//agora que mudamos para enurable : false , não será mais possivel.ver o atributo "Qualidade"
//ex:
Object.defineProperty(pessoa,"Qualidade",{
    enumerable:false,
})
console.log(Object.keys(pessoa))
console.log("Note que o atributo (Qualidade) não está mais visivel\n")

//Uma outra função do Object é o Assign ele consiste em reunir todos os objetos passados como parametros dentro de um objeto de destino sendo possivel armazenalos dentro de uma variavel.
//ex:
//objeto de destino
const dest = {a:1}
//objetos que serão agrupados dentro do objeto dest
const ob1 = {b:2}
const ob2 = {c:3 , d : 4}
//cirando um obj para armazenar todos os outros obj
//note que o primeiro atributo é o "dest" pois ele será o destino dos outro objetos
const objAgurp = Object.assign(dest,ob1,ob2)
console.log(objAgurp)
console.log("\n")
//podemos congelar o Obejto em questão para que não possar ser modificado com o "freze"
Object.freeze(objAgurp)
//ex: vamos tentar modificar o objAgurp
objAgurp.c = "mudar"
//mandando mostrar na tela note que mesmo que tenha atribuido um novo valor  ao atributo "c" ele não foi modificado 
console.log(objAgurp)