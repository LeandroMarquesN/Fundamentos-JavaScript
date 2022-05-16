//video aula desta aula : https://www.udemy.com/course/curso-web/learn/lecture/9022212#overview

//usando notação literal de objetos
//podemos criar um obecto sem o uso de new object usando somente a notação literal
const obj1 = {}
console.log(obj1)

//podemos criar atraves de uma função construtora atraves do uso de new Object
const obj11 = new Object
console.log(obj11)

//posso criar um object passando parametros já com  objectos e seus atributos
const obj2 = new Object({a:1,b:2,c:3})
console.log(obj2)

//A terceira forma de criar objetos seria criando nossas proprias funções construtoras

function produto(nome,preco,desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 -desc)
    }
}

const p1 = new produto('Caneta',7.99,0.15)
const p2 = new produto('Notebook',2998.99,0.25)

console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto())

//criando um objecto atraves de uma função factory

//factory 'eum afunção que cria alguma coisa no caso aqui vamo scriara um objeto

function criarFuncionario(nome,salarioBase,faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('joão',7980,4)
const f2 = criarFuncionario('Maria',11400,1)
console.log(f1.getSalario(),f2.getSalario())

//uma outra forma de criar um objeto é usando o (( Object.create))
//porem temos que passaro parametro como nulo
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//tambem podemos criar um objeto usando uma ,função famosa que retorna um obejto que o  ((JSON.parse)) está função converte o JSON em um objeto assim podemos acessar como uma variavel podemos usar isso em muitos caso em um webserver que recemos muitos json e assim podemos convertelos para um objeto onde fica mais facil de manipular
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)