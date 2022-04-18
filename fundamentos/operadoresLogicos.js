/*
 *    Operadores Logicos 

|| ==> ou  basta um ser verdaeiro que o resultado é verdadeiro
 v ou f = v
 v ou v = v
 f ou v = v
 f ou f = f

 temos tambem o (ou) exclusivo ele tem que ser sempre diferente 
 sinal do ou exclusivo ^
 ele pode ser simulado com a difereça 
 sinal da diferença !=
 (((usando o ou esclusivo))) neste caso os operadores tem que ser diferentes para que o resultado retorne verdadeiro
 xor é o ou esclusivo em ingles.
 v xor v => f  
 v xor f => v
 f xor v => v
 v xor v => f 
 (((usando o ou esclusivo))) neste caso tambem os operadores tem que ser diferentes para que o resultado retorne verdadeiro
 v ^ v => f  
 v ^ f => v
 f ^ v => v
 v ^ v => f 
 (((usando o a diferença))) quando usamos a diferença tambem precisamos que os valores sejam diferentes para retornar verdaeiro.
 v != v => f  
 v !=  f => v
 f !=  v => v
 

&& ==> e  preciso que os dois sejam verdadeiro para o resultado dar verdadeiro
 v E f = F
 v E v = V
 f E v = F
 f E f = F

 ! == Não

 !!() colocando duas negções Com o ponto de Exclamação vc comverte algo para boleano

 vamos criar uma função onde ela recebe como parametro valores boleanos onde vamo fazer o uso devido dos operadores logicos

NO programa abaixo estamos fazendo um alogica onde:

A pessoa possui 2 trabalhos o trabalho 1 e o trabalho 2
Para ela comprar o que deseja ela precisa que os 2 trabalhos retorne verdadeiro.


 
*/


function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTV32 = !!(trabalho1 ^ trabalho2) /bitwise  xor
    const comprarTV32 = trabalho1 != trabalho2
    const manterSuadavel = !comprarSorvete // operador unario

    return { comprarSorvete, comprarTv50, comprarTV32, manterSuadavel }
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))