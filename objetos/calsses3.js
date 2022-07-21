//https://www.udemy.com/course/curso-web/learn/lecture/9129708#overview

//https://www.w3schools.com/jsref/jsref_class_extends.asp#:~:text=Definition%20and%20Usage,you%20create%20a%20new%20class.

//Aqui vamos mostrar que uma classe pode herdar funções de outra pelo metodo(extend) como se fosse um aherançã por prototype

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class pai extends Avo {
    constructor(sobrenome,profissão = 'professor'){
        super(sobrenome)
        this.profissão = profissão
    }
}
class Filho extends pai {
    constructor(){
        super('silva')
    }
}

const filho1 = new Filho
console.log(filho1)