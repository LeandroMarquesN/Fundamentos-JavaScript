

   // Espaço para refazer os exercicios
   const separador = () => console.log("================================")

    console.log(`Uma String é considerado ${(!!"Leandro")}`)
    console.log(`Uma String vazia é considerado ${(!!"")}`)
    separador()
    console.log(`O numero 1 é conciderado ${(!!1)}`)
    console.log(`O numero 0 é considerado ${(!!0)}`)
    separador()

let isAtivo = false
console.log(`Está variavel é do tipo  ==> ${isAtivo}.`)
isAtivo = true
console.log(`Está variavel é do tipo ==>${isAtivo}`)

isAtivo = 1
console.log(!!isAtivo) //aqui estou querendo saber se o valor 1 é falso ou verdadeiro com 2 negações representadas pelo ponto de esclamação! A estratedia de colocar duas negações referenciadas pelo ponto de esclamação é uma maneira de verificar o valor boleano  em um elemento especifico.!
console.log(' ! agora vou para o proximo!')
isAtivo = 1
console.log(!isAtivo) //

console.log('os numeros quase todos são  verdadeiros com exceção do 0')
console.log(!!3)
console.log(!!-1)
console.log(!!` `)// espção é considerado verdeiro
console.log(!![])// im array vazio é conciderado verdadeiro
console.log(!!{})// um objeto é considerado verdadeiro
console.log(!!(isAtivo = true))

//===========================================
// Agora vamos ver os falsos
//===========================================
console.log(`Agora vamos ver os valores que retornão falso com a negação duplicada repesentada por dois pontos de esclamação!!`)
console.log(!!0)
console.log(!!``)//String vazia é considerado falso podemos fazer os teste se o campo foi digitado ou não
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))