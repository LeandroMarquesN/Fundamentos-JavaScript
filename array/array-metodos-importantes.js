/*
        METODOS IMPORTANTES DENTRO DE UM ARRAY

        metodos:
        pop() : remove o ultimo elemento de um array

        push() : Adiciona elemetos no array adciona 1 ou mais.

        Shift() : Ele retira o primeiro elemento da posição de um array.

        unShift() : adiciona um elemento na primeira posição.

        Splice() : Adciona e remove elementos de um array 
            Removendo 2 elementos apartir do indice 1
            Ex pilotos.splice(1,2)

            Adcionando 2 Elementos apartir do indice 2 sem escluir nenhum elemento do array note que depois do parametro do indice temos um 0 isso mostra que não vamos escluir nenhum elemento

            Ex. pilotos.splice(2,0,"Element1","Element2")

        Slice() : Retorna um novo Array apartir do parametro do indice do array em questão.
        
        Ex. Vamos criar um novo array apartir do indice 2 do array pilotos

        para isso temos que atribuir a uma const o nome do nosso novo array que vai receber este pedaço do array pilotos

        const algunsPilotos1= pilotos.slice(2)

*/
//criando um alista de pilotos em um array

const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
console.log(pilotos)

//Removendo o ultimo elemento de um array
pilotos.pop()
console.log(pilotos)

//Adicionando Elementos no array pilotos
pilotos.push('Verstappen',"Airton-Sena")
console.log(pilotos)

//Remmovendo o primeiro elemento de um array
//note que agora o vetel foi removido.
pilotos.shift()
console.log(pilotos)

//unShift() : Adicionando um elemento na primeira posição.
pilotos.unshift("Hamilton")
console.log(pilotos)

/* Removendo 2 elementos apartir do indice 1

Ex pilotos.splice(1,2)

Adcionando 2 Elementos apartir do indice 2 sem escluir nenhum elemento do array note que depois do parametro do indice temos um 0 isso mostra que não vamos escluir nenhum elemento*/
pilotos.splice(1,2)
console.log(pilotos)
//Note que o Alonso e o Raikkonen foram removidos

//Adicionando  2 elementos no array sem escluir nenhum
//Note que adcionamos os 2 pilotos que escluimos apartir do indice 1 .sem escluir nenhum
pilotos.splice(1,0,"Alonso","Raikkonen")
console.log(pilotos)

//Agora vamos adicionar mais um piloto que é o shumaker e vamos escluir  o 4 elemento que corresponde ao Airton-sena
pilotos.splice(4,1,"Shumaker")
console.log(pilotos)
//\Note que o piloto |Airton sena foi escluido e no seu indice de numero 4 adicionamos o piloto Shumaker

/*============================
Ex.Slice() Vamos criar um novo array apartir do indice 2 do array pilotos

        para isso temos que atribuir a uma const o nome do nosso novo array que vai receber este pedaço do array pilotos
*/
const algunsPilotos1= pilotos.slice(2)
//Note que foi criado um novo array apartir do indice 2 do array pilotos
console.log(pilotos)
console.log(algunsPilotos1)

//Escolhendo qual sera o incio e o fim do array craido pelo slice
//Ex. Vamos criar um novo array pegando do indice 1 de pilotos ate o indice 4  porem o indice 4 não será impresso.
const algunsPIlotos2 = pilotos.slice(1,4)
console.log(pilotos)
//note que ele pegou os elementos do array piloto do indice 1 até o 4 porem o elemento 4 que corresponde ao shumaker não  incluso.
console.log(algunsPIlotos2)
