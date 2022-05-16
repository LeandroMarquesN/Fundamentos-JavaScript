//Neste arquivo vamos entender o porque conseguimos modicficar valores de objetos dentro de uma constante.

//Ex:
const pessoa = {nome:"joão"}
console.log(pessoa)
//Dentro desta constante temos um endereço de memoria  onde a constante "PESSOA" está apontando para um endereço na memoria do computador  e neste endereço que de fato temos nosso valor do objeto criado que foi "pessoa" quando mudo o valor do objeto pessoa eu não estou mudando o endereço de memoria da constante pessoa e sim o seu valor ou seja o atributo "nome" que está dentro da constante pessoa  pode sim ser mudado porem o objeto "pessoa" em si não pode ser auterado.
//Ex:
pessoa.nome = 'pedro'
console.log(pessoa)

//caso eu escreva o codigo desta maneira 
/*
pessoa = {nome : "Ana"}

No codigo assima estou tentanto mudar o endereço de memória do computador onde está constante está apontando e teremos um erro! 
quando 
*/
//um metodo muito legal de objeto e onde podemos coglelar (freezer)o objeto pessoa.onde um avez que o objeto está congelado não conseguimos mais mexer neste objeto.
//Ex.
Object.freeze(pessoa)
//por mai que eu tente atribuir um novo valor ao objeto "nome" qu está dentro de "pessoa" eu não vou conseguir modificar o valor pois o atributo "pessoa" está congelado com a função(freezer)
//Ex: 
pessoa.nome = 'Maria'
console.log(pessoa.nome)
//perceba que o atributo nome não foi modificado ele ainda continua possuindo o valor "pedro " e não "maria"
/*Com o freeze não consigo atribuir deletar e nem modificar 

usando o freeze de fato conseguimos manter o objeto em si constante.
*/

//criando um objeto realmente constante onde não pode ser alterado ou modificado  ou deletdo. vamos ter que usar a função "freezer" desta maneira nem areferencia que indica aconstante pode ser mudada como seu valor também não pode ser mudado.

//Ex:
const pessoaConst = Object.freeze({nome: 'mariazinha'})

console.log(pessoaConst)

