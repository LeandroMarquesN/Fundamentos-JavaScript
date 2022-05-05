/*
Neste arquivo faremos uma comparação entre uma classe e uma função factory

classe é uma forma diferente de construir função em javaScript 
video aula : https://www.udemy.com/course/curso-web/learn/lecture/8946362#overview
*/

// vamos criar uma classe chamada pessoa
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu Nome é ${this.nome}`)
    }
}
const p1 = new Pessoa(`Leandro Marques`)
p1.falar()


// criar uma função factory que vai criar um objeto do tipo pessoa

const criarPessoa = nome => {
    return {
        falar:() => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Leandro Marques Nascimento')
p2.falar()
//perceba que neste caso não precizamos usar a palvra reservada (this) para acessar o nome e isso faz total diferençã quando executamos o codigo no navegador