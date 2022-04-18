//O setInterval serve para executar uma função ou instrução várias vezes em um determinado intervalo de tempo. A sua sintaxe é: setInterval(funcao(){bloco da função}, tempo); Isto significa que a função "funcao" será executada assim cada vez que se atingir o determinado tempo.
//o tempo é em milisegundos. ou seja 1000 vale um segundo 2000vale 2segundos etc...

/*
<<Atenção está é um aaula muito importante referente ao (this ) recomendo que assista novamente pois temos tecnicas importantes para driblara o comportamento estranho da linhagem onde fazemos referência ao this.
*/


function Pessoa() {
    this.idade = 0 //note que aqui o depurador mostra que o this aponta para o objeto pessoa.

    const self = this //aqui estou atribuindo o valor da constante self a referencia de this que neste escopo é o objeto pessoa e como estou atribuindo a uma constante seu valor não vai mudar.independete do escopo
    setInterval(function(){
        self.idade++  //este this não está apontando para (pessoa) ele está sendo referenciado ao (tempo) da      função setInterval onde está o valor 1000 milesegundos o timeout.deta maneira o console.log não consegue imprimir a idade na tela pois o this aponta para o timeout e não o objeto pessoa para o codigo retornar o valor da idade de fato precizamos usar a notação (.) ponto depois da chave azul da função onde vamos usar .bind(this)
        console.log(self.idade)
    }/*.bind(this) */,1000)
        //para resolver este problema vamos referenciar o (this a pessoa usando a função Bind(this))para amarrar o this no objeto pessoa pois se tirarmos o .bind(this)do codigo o this vai mudar referenciado se para o timeout que é quem de fato está disparando o envento. então descomente esse trecho do codigo e cuidado para não apagar o ponto
}
new Pessoa

//para que isso tudo funcione precisamos estanciar a partir da função Pessoa para ser criado um objeto. isso pra ver se this aponta de fato para o bjetos pessoa.

/*
codigo correto para retornar o valor de idade

setInterval(function(){
        this.idade++  //este this não está apontando para (pessoa) ele está sendo referenciado ao (tempo) da      função setInterval onde está o valor 1000 milesegundos
        console.log(this.idade)
    }.bind(this),1000)
*/