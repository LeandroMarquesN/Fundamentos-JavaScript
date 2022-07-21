//https://www.w3schools.com/js/js_classes.asp

//video aula : https://www.udemy.com/course/curso-web/learn/lecture/9075108#overview

//classes javaScript
/*
O ECMAScript 2015, também conhecido como ES6, introduziu as classes JavaScript.

Classes JavaScript são modelos para objetos JavaScript.

Sintaxe da classe JavaScript
Use a palavra-chave class para criar uma classe.

Sempre adicione um método chamado constructor():

ex; class classNmae {
    constructor() {...}
}

*/
class car {
    constructor(nome,ano) {
            this.name = nome;
            this.year = ano;
    }
}
//O exemplo acima cria uma classe chamada "Car".

//A classe tem duas propriedades iniciais: "nome" e "ano".

//como criamos aclasse para criar um objeto vamos usala
 let meuCarro1 = new car("fusca",1984)
 let meuCarro2 = new car("brasilia",1980)
