/*
//*Getters and Setter

//verifique esse site par ter um entendimento melhor:

//https://tableless.com.br/getters-e-setters-manipuladores-com-javascript/

video aula do curso : https://www.udemy.com/course/curso-web/learn/lecture/9022218#overview

//Um breve contexto do assunto:
/*
Getters e setters são comuns em várias linguagens, no javascript não seria diferente, eles nos ajudam a encapsular/proteger/isolar propriedades e facilitar o trabalho com objetos. Normalmente utilizamos quando precisamos fazer validações ou tratamentos antes de salvar um dados. O mesmo acontece para recuperá-los. Sem os getters e setters

*/
const number = {
    _valor : 2,
    get moeda(){
        return `valor correspondente a moeda monetaria :R$ ${this._valor.toFixed(2).replace(".",",")}`
    },
    get inteiro(){
        return `Valor correspondente ao numero interio :${this._valor}`
    },
    set int(i) {
        this._valor = i ;
    }
}
console.log(number.moeda)
number.int = 3000
console.log(number.moeda)
console.log(number.inteiro)