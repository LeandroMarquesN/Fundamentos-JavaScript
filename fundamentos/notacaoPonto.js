console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
//Aqui estou criando dinamicamente um class (nome)dentro do objeto obj1 atraves do (.)ponto.
console.log(obj1)
//=================================================
//    posso criar dinamicamente desta maneira tambem caso não exista está class dentro do objeto

obj1['nome'] = 'Bola2'
console.log(obj1)

//================================================

function Obj(nome) {
    this.nome = nome
    this.exec = function () {
        console.log("Alguma coisa...")
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
//com a notação ponto podemos acessar tanto os atributos quanto as funções que estejam visiveis