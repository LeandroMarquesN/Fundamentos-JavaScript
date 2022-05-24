/*
função construtora em javaScript

As funções construtoras em JavaScript são como as classes do Java, diferenciando apenas pela sintaxe. Em questão de funcionamento, tanto funções contrutoras no JavaScript quanto Classes no Java têm a mesma utilidade: servir de molde para a criação de objetos.

Para construir objetos, funções construtoras precisam ser instanciadas pelo operador new. O this dentro delas se referencia ao objeto criado a partir delas.

No exemplo abaixo, a função Carro é uma função construtora, e carro1 é um objeto criado a partir do “molde” dessa classe, usando o operador new:

function Carro(marca, modelo, ano){
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
}

const carro1 = new Carro('Charger', 'RT', 1970)

console.log(carro1)

link:https://blog.cod3r.com.br/funcoes-construtoras/#:~:text=As%20fun%C3%A7%C3%B5es%20construtoras%20em%20JavaScript,para%20a%20cria%C3%A7%C3%A3o%20de%20objetos.

*/
function Carro(marca, modelo, ano){
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
}

const carro1 = new Carro('Charger', 'RT', 1970)

console.log(carro1)


function familia(membro1,membro2,membro3){
    this.menbro1 = membro1
    this.membro2 = membro2
    this.membro3 = membro3
}

const familiaMarques = new familia('leandro','livia','lavinia')
console.log(familiaMarques)

//vamos criar mais um exemplo de função construtora crindo um novo objeto chamado de hosbs
 function hobs(h2,h3,h4){
    this.hob2 = h2
    this.hob3 = h3
    this.hob4 = h4
    return `Esses são os meus hobs: \n ${h2}\n ${h3}\n ${h4}.`
    
}

const hobss = new hobs('tocar violão','Estudar programação','praticar musculação')
console.log(hobss)

console.log(hobs('Estudar programação','praticar musculação','dançar'))



