//<<!!ATENÇAO LEIA O DOCUMENTO NA ORDEM ESCREITA !!>>
// Para melhor compreensão : https://www.udemy.com/course/curso-web/learn/lecture/9053628#overview

//Cadeia de prototipo exemplo mais complexo onde vamos abordar uma maneira diferente de tribuir os __proto__ usando um afunção especifica de Objetos que a "Object.setPrototypeOf()"

//Ex: criando um objeto:
const carro = {
    velAtual:0,
    velMax: 200,

    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else {
            this.velAtual =  this.velMax
        }
    },
    status() {
        return `${this.velAtual} Km/h de ${this.velMax} Km/h`
    }
} 

//Agora vamos criar outros objetos 

const ferrari = {
    modelo: 'F40',
    velMax: 324
    //No momento que eu definir que o __proto__ de "Ferrari" será o "carro"  o atributo (velMax) de (ferrari) vai sombrear o atributo original do carro que por sua vêz também possui o atributo (velMax) que será o efeito Shadowing
}

//Vamos criara mais um objeto

const volvo = {
    modelo: 'V40',

    //Agora vamos fazer um efeito shadowing com o atributo (status) vamos usar ela com um adição de recursos onde iremos usar uma palavra reservada chamada de ((super)) da mesma forma que uso o ((this)) para referenciar o objeto atual eu uso o ((super)) para referênciar o meu prototypo
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

//Agora sim vamos estabelecer as conexoes herárquicas dos objetos usando a função de Objetos
//Object.setPrototypeOf(1ª,2ª...) onde o seu 1ª primerio parametros será o objeto em questão (ferrari) e o 2ª será o prototipo do objeto referencia que será o (carro) ous eja o carro é o prototipo de ferrari.
Object.setPrototypeOf(ferrari,carro)
//e vamos fazer o mesmo para o volvo
Object.setPrototypeOf(volvo,carro)

//Esse metodo que utilizamos para desiguinar a conexão, desiguinando a hierárquia dos prototipos está especificado na linguagem podemos usar que qualquer navegador mais antigo terá uma boa aceitação.

console.log(ferrari)
//NA linha acima ele vai mostrar apenas os atributos do objeto ferrari mesmo pois não temos nenhuma função declarada.
console.log(volvo)
//porem quando chamo o volvo, ele ja possui uma função onde eu posso fazer o uso.

//vamos chamar  a função acelerar do objeto carro pelo objeto volvo . já que isso é possivel pois determinamos o carro sendo o prototipo de volvo e quando o sistema fazer a busca em volvo e não encontrar a função acelerar ele vai buscar no protoipo de volvo que é o objeto carro.
volvo.acelerarMais(100)
console.log(volvo.status())
// na liha acima ele vai chamar mostrar na tela tanto o modelo quanto vai mostrar o (super) do status já que o super é usado para fazer a chamada do prototipo que está sendo sombreado   

//podemos afazer o mesmo com ferrari
ferrari.acelerarMais(300)
console.log(ferrari.status())
console.log(ferrari.modelo,ferrari.status())
volvo.acelerarMais(350)
console.log(volvo.status())