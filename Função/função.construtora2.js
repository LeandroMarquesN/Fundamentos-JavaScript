/*video aula : https://www.udemy.com/course/curso-web/learn/lecture/8899030#overview
*/
//criando uma função onde vamos passar dois  párametros para construir nosso objeto vamos usar o recurso de colocar o valor padrão como parametro

function carro(velocidadeMaxima = 200, delta = 5) {

    //Atributo privado que so existe neste escopo desta função
    let velocidadeAtual = 0

    //metodo publico atraves da palavra reservada (this) está função será responsável por acrecentar a velocidade a velocidadeAtual
    this.acelerar = function () {
        //vamos colcoara um teste logico para que a velocidade não ultrapasse a velocidade maxima
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }//isso foi para garantir que a velocidade maxima sempre será à que foi determinada como padrão no parametro

    //criando um novo metodo publico dentro da função construtora carro e este metodo será responsavel por pegar a velocidade atual
    this.getVelocidadeAtual = function () {
        return velocidadeAtual 
    }
}
//observação!! Quando queremos tornar algo publico!  Em que no caso aqui foram os metodos que queremos deixar visiveis ! estes metodos que agora estão visiveis para fora do escopo da função! temos que usar a palavra resevada (this)

//continuando vamos instanciar uma constante recebendo (new carro) onde vamos chamar a função construtora carro() 
const uno = new carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

//Agora vamos passar um novo atributo ao objeto carro que será a ferrari e ela vai ter os parametros da velocidadeMAxima 350 e delta 20

const ferrari = new carro(350,20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()

//como chamei a função acelerar 3 vezes teremos a velocidade atual de 60 ja que o parametro do delta que corresponde a aceleração do carro aumenta de 20 em  20 
console.log(ferrari.getVelocidadeAtual())
