/*
Para modificar a class para uma função construtora devemos substituir a palavra class para function

video aula:
https://www.udemy.com/course/curso-web/learn/lecture/8946364#overview

*/
//class
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu Nome é ${this.nome}`)
    }
}
const p2 = new Pessoa(`Leandro Marques`)
p1.falar()

//Agora passando para uma função construtora
function Pessoa(nome){
    this.nome = nome
    
    this.falar = function(){
        console.log(`Meu Nome é ${this.nome}`)
    }
}
const p1 = new Pessoa(`Leandro Marques`)
p1.falar()