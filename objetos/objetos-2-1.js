//criando um exemplo de objetos um pouco mais complexo estaremos criando uma constante de nome carro onde vai receber varios outros atributo , objetos , array de objetos, funções 

const carro = {
    modelo:'A4',
    valor:89000,
    proprietario: {
        nome:'Leandro',
        idade:56,
        endereço:{
            logradouro:'Rua ABC',
            numero:123,

        },
        //podemos dentro deste objeto um array de objetos
        condutores:[{
            nome:'Junior',
            idade:19
        },{
            nome:'Ana',
            idade:42
        }],
        // POdemos tambem ter dentro deste objeto funções
        calcularValorSeguro: function(){
            //aquidentro podemos colcoara os codigo para está função
        }
    }
}

//Podemos acessara os atributos atraves da notação ponto
carro.proprietario.endereço.numero = 1000

//POdemos acessara atravé a da notação colchete []
carro['proprietario']['endereço']['logradouro']='Av Gigante'
console.log(carro)

//Podemos tambem deletar objetos e todos seus atributos que forem dependentes destes objetos, deletara as funçoes  .
delete carro.condutores
delete carro.endereço
delete carro.calcularValorSeguro
