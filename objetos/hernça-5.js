//Neste arquivo vamos ver que 3 elementos que usamos muito na linguagem tem o tipo sendo function onde os 3 possuem um atributo chamado? 
//Isso mesmo ".Prototype" pois toda função possui um atributo .prototype

//Ex:
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//E sabendo disso podemos usar coisas do tipo :
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
    //aqui vamos quebrar a string em cada um adas letras que vai gerar um array onde terá todas as letras da string inclusive espaços em brancos serão elementos do array.
    //pois o array tem a função "reverse" onde ele reverte e depois chamamos o "join" para juntar todos os elementos 
}
//Onde com o codigo assima iremos reverter uma String porem a reverse não tem na API mas fizemos uma iplementação.

//O conceito  é vc fazer novos atributos e conceitos em um determinado prototipo

//E para testar a nossa função reverse que esta agora no prototype pois não existia na API mas como disse nos adionamos este metodo no ptotype de String
console.log('Leandro Marques'.reverse())

//Por mais que não tenha o metodo first em array para pegara o primeiro elemento de um array podemos fazer a iplementação no "prototype de um array"
Array.prototype.first = function (a=0) {//por padrao declarei o elemento a tendo o valor de 0 caso não seja passado nenhum parametro

    //Uma coisa importante que nos conceguimos acessar um array ou uma string dentro de um metodo que criamos atraves do "this"
    return this[a] // aqui estamos acessando o primeiro elemento de um array
}
//vamos criar um aray literal de 3 posições onde o primeiro e 0 o segundo e 1 e o terceiro é 2 escolha um numero de 0 a 2 para mostrar o elemento
const list = ["leo","li","lavi"]
console.log(["leandro","livia","lavinia"].first())
console.log(list.first(1))
console.log(list.first(2))
console.log(list.first(0))
//Uma coisa que devemos ter cuidado é mecher em funções que ja estão presentes no prototypo de uma função e na verdade não faça isso! pois teremos resultados catastroficos não substitua comportamentos que ja existam dentro de um sistema  de uma maneira global pois vamos gerar efeitos muito dificeis de ser revertidos! ja que estamos mexendo no escopo global
