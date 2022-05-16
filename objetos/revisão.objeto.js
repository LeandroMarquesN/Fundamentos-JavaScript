
//Através do new Object conseguimos criar um objeto atraves da notação (.)ex : usario.nome e como podemos criar outros objetos dentro de um objeto dinamicamente atraves da notação ponto.
const usuario = new Object
//Aqui estou criando o atributo "nome"
usuario.nome = "leandro"

console.log(usuario)

//Aqui ja criei o atributo "idade" e o atributo "endereço" que por sua vez dentro do atributo "endereço " criamos mais dois objtos "soa paulo" e "rio_de_janeiro"
usuario.idade = "37"
usuario.endereço = {
    sao_paulo: {
        rua: "paineira",
        nº:"82",
        bairro:"Vargem Grande"
    } ,
    rio_de_Janeira: {
        rua: "Rua visconde",
        nº:"99",
        bairro:"Rossinha"

    }
}
//Aqui vamos conseguir acessar os valores do atributo "sao paulo"
console.log(usuario.endereço.sao_paulo)

//Agora vamos criar um array chamado de "filhas" dentro do objeto usario
usuario.filhas = ["lara","luane","livia","lavinia"]
console.log(usuario)

//podemos saber o comprimento do atributo dentro do objeto usario  utilizando a função "lenght"
console.log(usuario.filhas.length)

//Aqui como tenho 4 finhas ele vai retornar o numero 4

//Aqui estou usando o destruction para extarir o atributo filhas do objeto usario permitindo que ele fique visivel glabalmente par que  possa ser exibido o valor na tela 

const {filhas}= usuario

//Aqui ele vai retornar o valor do comprimento do array filhas pois estamos utilisando a função "length"
console.log(`Leandro possui ${filhas.length} filhas gemeas`)

//Agora vou criar mais um objeto chamdo de  "unidade" dentro do objeto "usario" que vai ficar dentro do o objeto "faculdade" para isso preciso criar  o objeto "faculdade"

usuario.faculdade = { unidade : "São Paulo"}
console.log(usuario)

//Agora vou usar o distruction para retirar o atributo  "unidade" que está dentro do atributo "faculdade" que por sua vez está dentro do objeto "usario"

const {faculdade:{unidade}} = usuario

//Usando o Destruction consigo acessar o atributo "unidade" que está dentro do objeto "usario" ou seja usando o destruction coseguimos acessar 
console.log(`Èstou tentando acessar o atributo "unidade" que por sua vêz possui o valor = ${unidade} `)