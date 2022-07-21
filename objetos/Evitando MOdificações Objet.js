//por conta do javaScripti ser uma linguagem fracamente tipada devemos ter alguns cuidados pois ela e altamente dinamica e m qual quer momento podemos fazer um aalteração inadequada e para evitar um pouco desses erro podemos usar alguns metodos :

 //video aula : https://www.udemy.com/course/curso-web/learn/lecture/9075088#overview

 //referencia ; https://www.w3schools.blog/object-preventextensions-javascript

 //está referencia mostra todos os metodos para evitar ou modificar os objetos : https://www.w3schools.com/js/js_object_es5.asp

 //ex:
 /*
                                // Prevents adding properties to an object
                            Object.preventExtensions(object)

                            // Returns true if properties can be added to an object
                            Object.isExtensible(object)

                            // Prevents changes of object properties (not values)
                            Object.seal(object)

                            // Returns true if object is sealed
                            Object.isSealed(object)

                            // Prevents any changes to an object
                            Object.freeze(object)

                            // Returns true if object is frozen
                            Object.isFrozen(object)
 */

//Object.preventextensions :ele previne qualquer tipode alteração no objeto ou seja nãoconseguiremos aumentar o numero de atributos o objeto podemos ate escluir mas naõ podemos adicionar novos 
//Ex;
 const produto = Object.preventExtensions(
        {
            nome: "Qualquer" ,
            preco:1.99,
            tag:"promoção"
        }
 )
//para fazer a verifivação se realmete o objeto é extensivo  ou foi criado como Preventextensions ou não ,usamos: Object.isExtensible()
console.log("Extensivel", Object.isExtensible(produto))
//usando essa propriedade consigo alterar o valor dos atributos
//Ex:
produto.nome = "Borracha"

//poremnão consigo adcionar novos atributo como vou fazer na senteça de codigo abaixo
produto.descricao = "alguma coisa"

//usando esse metodo eu consigo deletar atributos
delete produto.tag
console.log("o atributo (tag) foi deletado \n Porem não conseguimos adicionar um novo atributo como foi no caso de (descrição)\n",produto)

//==============================================================
//O proximo metodo é o Object.Seal

const pessoa = {nome:"juliana",idade:35}

//agora vamos selar este obejto
Object.seal(pessoa)
//Com  esse metodo nãoconseguimos adicionar novos atributos
//Não podemos excluir atributos do objeto
//porem conseguimos modificar valores dos atributos.

//para verificarse o objetos está seledo usamos o Object.isSealed()
console.log("Objeto (pessoa) está selado ?  = ",Object.isSealed(pessoa))

//=====================================
//Temos o Object.freze = onde ele é selado e possui valores constantes
//Com este metodo não conseguimos fazer absolutamente nada ele está consgelado
const espostes = {esporte1:'musculação', esporte2:"natação"}

//agora vamos congelar este obejto impedir todas as mudanças
Object.freeze(espostes)

//verificando se ele está congelado
console.log("O objeto (espostes) está congelado ? =",Object.isFrozen(espostes))
