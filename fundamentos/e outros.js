//   Tipos primitivos 
/* Number com N maiusculo é uma função
   number com n minusculo é o tipo do dado
 
*/



var nome = 'leandro'
console.log(`O nome ${nome} que está dentro da varaivel nome é conciderado :\n uma  :${typeof nome}`)

let altura = 1.80
console.log(typeof altura)

const bonitao = true
console.log(typeof bonitao)

// neta  função está perguntando se a variavle altura é um numero inteiro
console.log(`A altura de ${nome} é um numero inteiro ? ${Number.isInteger(altura)} .`)
console.log(`Este comando  \n {Number.isInteger(altura)}\n E conciderado uma função do number para descobrir se a variavel altura é um numero inteiro por isso que estamos usando o (isInteger) siguinifica (é inteiro)`)


if (altura) { //==> como retorno um valor falso escreveu a menssagem
    console.log(`Não é um numero Inteiro.`)
}
// =========================================
//     função para casas decimais,typos,converção para string
// ========================================
num = 45
num2 = 573
media = num + num2 / 2
console.log(media.toFixed(3)) //==> arredonda para 3 casas decimais
console.log(`com este comando : \n (media.toFixed(3)) //==> arredonda para 3 casas decimais estamos arredondando a variavel media para 3 casas decimais com o (tofixed)`)
media = media.toFixed(4)
console.log(media.toString())//==> converte para string
console.log(`O tipo da variavel media agora é do tipo :${typeof media}`)

