
const cliente = {
    nome: `leandro`,
    idade: 37,
    cidade: {
        SaoPaulo: {
            endereco: {
                bairro: "Vargem Grande ",
                largadouro: "Rua Paineira",
                numero: 82,
            }
        },
        RioDeJaneiro: {
            endereco: {
                bairro: "Leblon",
                largadouro: "Rua do rio de janeiro.",
                numero: 13,
            }
        }
    }
}
console.log(cliente)
console.log(`Perceba ue aqui estamos acessando informações especificas de dentro de um objeto que possui outros objetos \nOnde vamos buscando as informações atraves da notação ponto.\n\nNeste exmplo estamos pegando o endereço que é um obejeto\nQue está dentro do obejto cliente.\n\n `)
console.log('informções cliente:')
console.log("Nome :",cliente.nome)
console.log("idade:",cliente.idade)
console.log(`Endereço do cliente :`)
console.log(cliente.cidade.SaoPaulo.endereco.largadouro)
console.log(cliente.cidade.SaoPaulo.endereco.numero)
