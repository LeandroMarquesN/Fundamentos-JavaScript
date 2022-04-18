/*
    Operador ternario
    possui tres operandos
    1ª operando nota >=7 =retorna (verdaeiro ou falso)
    2ª operando  ? "Aprovado" = se der verdeiro
    3ª operando   : "Reprovado" = se der falso

    O resultado de um operador ternario é retorna um dos dois valores! 
    Onde podemos armazenalos dentro de uma constante
    
*/



const resultado = nota => nota >= 7 ? "Aprovado" : "Reprovado"
//Aqui estou atribuindo uma função do tipo arrow ou flecha a uma constante.
//onde temos um operador ternario onde caso a note seja menor que 7  o aluno será reprovado
console.log(resultado(7.1))
console.log(`O aluno etá ${resultado(5)}.\n\n`)
// =====================================================
// podereiamos escrever  o codigo desta forma tambem
//note que aqui ja temos o bloco da função utilizando as {chaves} e dentro do bloco temos a palavra reservada (return) e em seguida temos o nosso retorno que no caso 'eum operador ternario (condição)?(se verdadeiro): (se falso)

const resultado2 = nota => {
    return nota >= 7 ? "espertão " : "burrão"
}
console.log(` você é: ${resultado2(5)}.`)
console.log(`você é : ${resultado2(9)} .`)

//Exercictando com um exercicio parecido.

const resultado3 = opniao => opniao == 'sim'? "você é uma pessoa honésta": "voce é um Sem vergonha"

console.log(`Atribua o valor a variavel opinião de sim ou não.\nSe vocẽ encontrar um  celular na rua voce devolveria caso você recebece a ligação do dono`)

let opniao = 'sim'//=> atribua o valor sim ou nao

//mostrando o resultado
console.log(`Sua resposta mostra que ${resultado3(opniao)}`)