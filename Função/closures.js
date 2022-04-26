/*
link >https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures

Closures (clausura, em português) é um conceito geralmente associado com as linguagens de programação funcionais (JavaScript, F# etc.) que vinculam uma função ao seu ambiente de referência, permitindo o acesso a variáveis fora do escopo da função.

Um closure (fechamento) é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada.

Closures
Um closure (fechamento) é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada.

Escopo léxico
Considere a função abaixo:

function init() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  displayName();
}
init();
Copy to Clipboard
A função init() cria uma variável local chamada name, e depois define uma função chamada displayName(). displayName() é uma função aninhada (um closure) — ela é definida dentro da função init(), e está disponivel apenas dentro do corpo daquela função. Diferente de init(), displayName() não tem variáveis locais próprias, e ao invés disso reusa a variável name declarada na função pai.

Rode o código e veja que isso funciona. Este é um exemplo de escopo léxico: em JavaScript, o escopo de uma variável é definido por sua localização dentro do código fonte (isto é aparentemente léxico) e funções aninhadas têm acesso às variáveis declaradas em seu escopo externo.

*/
//Exemplo pratico
const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}
const minhafuncao = fora()
console.log(minhafuncao())