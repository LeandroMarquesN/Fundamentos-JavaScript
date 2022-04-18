/*
    Funções Anonimas: 
    
    dentro de javaScript devemos ter este conceito muito bem internalizado pois é um recurso muito utilizado dentro da linguagem.

    Quando trabalhamos com funçoes podemos nomealas exeto as Arrow function ou funcções de ceta =>

    

*/
//Exemplo 1: podemos armaxenar uma função dentro de uma variavel ou constante.

const soma = function (x,y){
    return x + y
}

//Ex 2 : criaremos um afunção imprimir resultado que vai receber um aoutra função anonima e ela vai receber 3 parametros: o (a) o (b) e como terceiro parametro vai receber uma operação que vai operar em cim ados dois primeiros parametros o (a e o (b)) que por padrão se não ser passado nada vai assumir a função soma(operação = soma)

const imprimirResultado = function (a,b, operação = soma){
    console.log(operação(a,b))
}
//testando a function imprimirResultado passando somente os dois primeiros resultados e como o terceiro parametro não será passado ele vai assumir como padrão a opercação recebendo a constante soma que por sua véz está recebendo uma função. pois a variavel (a) e (b) foram passadas como parametros para operação(a,b)
imprimirResultado(3,4)
//podemos explicitamente passara a constante somacomo paraemtro para a function imprimirResultado que teremos o mesmo resultado.
imprimirResultado(3,4,soma)
//podemos passar uma outra função dentro dos paranteses sendo um parametro para a função que vai receber.Este é um recurso muito utilizado !! seguindo no exmplo abaixo. neste caso não foi usado a operação soma e sim a function anonima que passamos como parametros.
imprimirResultado(3,4, function (x,y){
    return x-y
})
//EX 4 : podemo usar um arrow function como parametrso sem problema. detalhe como ela possui 2 parametrso não podemos tirar os parenteses.

imprimirResultado(3,4, (x,y) => x * y )

//Ex 5 podemos criara um afunão dentro de um objeto

const pessoa = {
    falar: function (){
        console.log("Ola Leandro")
    }
}
//acessando o atributo falara que possui uma função
pessoa.falar()

//podemos fazer o mesmo exemplo com uma sintaxe diferente.
const fofoqueira = {
    fofoca() {
        console.log("Cuida da sua vida fofoqueira!!")
    }
}
fofoqueira.fofoca()