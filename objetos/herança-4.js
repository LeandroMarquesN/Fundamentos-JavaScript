//Nessa aula iremos entender um pouco mais sobre a função e o atributo (prototype)da função

//vamos começar criando uma função para entender um pouco mais sobre o atributo prototype da função

function MeuObjeto() {}
console.log(MeuObjeto.prototype)//Aqui ja sabemos que "prototype" é um atributo e ele é um objeto


//Aqui estamos criando 2 estâncias da função onde será criado 2 objetos apartir do operador (new)
const objj1 = new MeuObjeto
const obj2 = new MeuObjeto

//Partindo deste ponto surgi algumas perguntas apartir do momento que estânciamos objetos apartir de um afunção será que o __proto__ vai apontar para Object.portotype ou vai apontar para Meuobjeto.prototype

//E a partir do momento que eu atribuo 2 objetos diferentes apartir de uma função construtora os prototipos destes objetos apontam para o mesmo objeto por padrão? e a resposta é sim
console.log(objj1.__proto__ === obj2.__proto__)

//Na linha abaixo tanto faz eu testar um outro ja que os dois objetos são extritamente iguais ou seja apontam para o memo objeto.
console.log(MeuObjeto.prototype === objj1.__proto__)
//Quando criamos um objeto apartir de uma função construtora usando o (new) o prototipo deste objeto automaticamente aponta para a função que criamos (.) ponto ".prototype" e não Object.protype qu é quando criamo sum objeto apartir do new Object ou apartir do Objeto Literal criado com {} por padrao o prototypo dele é o Object.protype 

// uma Observação Toda função possui um atributo "protype"
//Como temos tambem o atributo __proto__ que é difeterente do atributo prototype 

//O atributo __proto__ e um amaneira de referenciarmos os outros objetos sendo prototipos 

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia meu nome é ${this.nome}`)
}
//executando o objj1 como ele não tem este atributo ele vai buscar está funao no seu protypo
objj1.falar()

//Aqui ja estou sobreescrevendo o atributo Nome atribuindo outro valor
obj2.nome = "Rafael"
obj2.falar()

//Aqui estamos criando mais um objeto e estamo fazendo isso com a notação iteral de objeto
const obj3 = {}

//Aqui estamos mudando a referencia do prototypo do objeto3 para sair de Object.prototype que 'eo padrao para ir para MeuObjeto.prototype 
obj3.__proto__ = MeuObjeto.prototype

//sendo assim vou ter acesso aos atributos exemplo "nome" e a função  "falar"
obj3.nome = "obj3"
obj3.falar()

//Resumindo
//abaixo estamo colocando algumas acertivas verdadeiras

//Aqui estamos vendo que foi criada um estância apartir da função MeuObjeto onde ele tem o __proto__ pois o resultado de new MeuObjeto é um objeto 
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)

//aquino caso Meuobjeto é uma função onde ele possui o atributo __proto__ e por padrão ele aponta para Function prototype
console.log(MeuObjeto.__proto__ === Function.prototype)

console.log(Function.prototype.__proto__ === Object.prototype)

//E caso tenhamo curiosidade de acessar o caminho abaixo vamos ver que ele será nullo pois chegamos no limite dos prototypos
console.log(Object.prototype.__proto__)
//No caminho acima vai ter o resultado de nullo pois não existe prototypo de Object.protype ou seja não possui nada na cadeia de protypos