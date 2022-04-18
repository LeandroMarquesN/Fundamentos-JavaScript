/*
     Operador destructuring : é um operador de desistruturação ele tira da estrutura alguma coisa.
     estrutura pode ser um objeto.

     ele tira um atributo do seu objeto 
     podemos fazer o mesmo com os arrays

     quando estamos trabalhando com objetos usamos {}
     E quando estamos trabalhando com arrays usamos colchetes []

     É um recurso que foi introduzido no ES2015

    //vamos trabalhar usando um objeto então vamos trabalhar com chaves {}
*/
//Objeto Pessoa :
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        lagradouro: 'Rua paineira',
        numero: 82
    }
}
//Apartir do objeto pessoa vamos estrair a variavel nome e idade! quero ter acesso a essas variaveis.

//usando o Destructuring:
const { nome, idade } = pessoa // => Destruturing
console.log(nome, idade)
console.log(`Dentro do objeto Pessoas temos a variavel nome (${nome}) e a variavel idade (${idade}) que foi extraido através do Destructuring`)

//Na linha 27 temos uma sentenca de codigo onde estou disendo que quero que tire de dentro do Objeto pessoa a variavel (nome) e (idade)

// podemos criar uma variavel dentro do destruturing para facilitar a sintace
const { nome: n, idade: i } = pessoa
console.log(`Nome agora é (n) => ${n} e idade agora é (i) ${i}`)

//Agora vamos extrair o endereço do objeto pessoa

const { endereco } = pessoa
console.log(endereco)

//Agora vamos extrair  o lagradouro e numero de dentro do objeto pessoa que está dentro objeto endereço.
const { endereco: { lagradouro, numero } } = pessoa
console.log(lagradouro, numero)

//Aqui estamos adicionando uma class (cep) para endereço dinamicamente usando a notação (.) ponto
endereco.cep = '04896300'
console.log(pessoa)

//Refasendo o novo exercicio  de  destructuring onde vamos retirar os atributos modelo barato e modelo caro
//criando um objeto e seus atributos

const modelos_celular = {
    motorola:'moto_g',
    sansung:"s9",
    iphone:{
        modelo_barato: "iphone_6",
        modelo_caro:"Iphone_11"
    }
}
const {iphone :{modelo_barato,modelo_caro}} = modelos_celular
console.log(`O destructuring mostra como conseguimos retirar um atributo de de dentro de um objeto.\nNeste exemplo estamos tirando os iphone do objeto modelos de celular \n E dentro de iphones temos:OS modelos baratos :\n${(modelo_barato)}\n E tambem temos os modelos caros :\n ${(modelo_caro)}`)



