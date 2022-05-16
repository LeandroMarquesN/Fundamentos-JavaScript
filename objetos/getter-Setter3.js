/*
1 - Utilisando o metodo getter and setter vamos criar uma  constante onde vai receber um objeto onde dentro deste objeto teremos um atributo chamado (_valor).
2 - Agora vamos pegar este valor e transformalo para um valor monetario   utilizando os metodos getter and setters.

*/
//Definido os metodos:
const number = {
    _valor : 4,
    get moeda1(){
        return `valor monetario ${this._valor.toFixed(2).replace(".",",")}`
    },
    get inteiro1(){
        return `Valor inteiro ${this._valor}`
    },
    set newValor(props){
        this._valor = props;
    }
}
//Acessando os metodos:
console.log(number.moeda1)
//atribuindo um novo valor :
number.newValor = 56
//Acessando novamente os metodo com o novo valor :
console.log(number.moeda1)
//Acessando o metodo com o novo valor so que mostrando interio e não monetario.
console.log(number.inteiro1)
//Acessando novamente o metodo com o novo valor so que agora monetario.
console.log(number.moeda1)