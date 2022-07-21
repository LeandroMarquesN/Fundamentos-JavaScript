//video aula: https://www.udemy.com/course/curso-web/learn/lecture/9075098#overview  notação de objetos javaScript (json)
//json é um formato de dados JSON é basicamente um formato leve de troca de informações/dados entre sistemas. Mas JSON significa JavaScript Object Notation, ou seja, só posso usar com JavaScript correto? Na verdade não e alguns ainda caem nesta armadilha. O JSON além de ser um formato leve para troca de dados é também muito simples de ler.

const { toUpper } = require("lodash")

//vamos criara um objeto que possuirá em seus atributos valores e  um função e depois vamos convertelos para o formato  json onde a unção não faraá parte pois ojson possui um formato de dados e não se consegue executar nada em jsom

const obj = {
    a:1,
    b:2,
    c:3,
    soma(){ return a+b+c}
}
console.log(JSON.stringify(obj))

//agora vamos pegar um jsom e transformalo em um objeto e o formato  abaixo não é valido e vai dar erro
// const json1 = JSON.parse("{a:1,b:2, c:3}")

//dessa maneira vai dar erro tambem:

// const json1 = JSON.parse("{'a':1,'b':2,'c': 3}")

//maneira corretea
const json1 = JSON.parse('{"a":"1","b":"2","c":"3"}')

//abaixo temos um formato valido tambḿ
const json2 = JSON.parse('{"a":1,"b":2,"c":3}')

//uma outra possibilidade onde podemos em um documento com formato json conter string, valor bloleano, objetos, array lembrando que estamos convertendo um json para um objeto
const obj2 = JSON.parse('{"a":1,"b":"string","c":true,"d":{},"e":[]}')
console.log(obj2)

//acessabdo o obj2 e seu atributo c
console.log(obj2.c)

//acessando o array[] que está no atributo "e"
console.log(obj2.e)

//mostrando realmente o tipo de obj2 onde realmente foi convertido para um objeto
console.log(typeof(obj2))
    


console.log(json1)
console.log(json2)
