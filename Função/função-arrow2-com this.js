/*
    conceito de (this) dentro de uma função arrow ele é um this fixo ele é baseado no contexto no qual a função foi escrita em que o fato onde está sendo chamado em locais diferentes não influência o valor do this.

    No exemplo abaixo vamos ver que o this não varia de acordo com quem está chamando pois estamos usando o this em uma função arrow! onde quando fazemos o uso do this dentro do contexto lexo da função ele não vai variar como foi no caso do  documento thisEaFunçãoBind2 onde tivemos que usar algumas estrategias pois como não estavmos utilizando a função arrow o this estáva mudando sua origem para o timeout da função setInterval que quem era de fato quem está chamando o evento .
    Isso ja 'e um agrande vantagem de usar a function arrow. pois teremos total controle do (this)
*/
function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000);
}
//extanciando o objeto Pessoa para que o codigo de certo
new Pessoa