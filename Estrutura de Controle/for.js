/*
        vamos fazer um acomparação entre a estrutura while e for
*/
//testando a repetição wile para depois transformar em for

let contador = 0
while (contador <= 10) {
    console.log(contador)
    contador++
}

console.log(" Apresentando a estrutura(for)")
//Agora vamos fzer o mesmo codigo com for
contador1 = 0
for (contador1 = 0; contador1 <= 10; contador1 = contador1++) {
    console.log(contador1)
    contador1++
}

//agora com array e for [[Podemos percorrer o array]]
//length == ele conta o numero de elementos do vetor
//a foram de verificara o tamanho de um array é usando a função (length) ele mede o comprimento


console.log("Percorrendo o array com a estrutura de repetição (for) ")

//declarando o arrayNum
numArray = [0, 10000000, 200000, 30000, 4000, 500, 60]

//estrutura de repetição for

for (let i = 0; i <= numArray.length; i++) {
    console.log(numArray[i])
}
arrayNomes = ["Leandro","Livia","Lavinia"]

for(let c = 0 ; c <= arrayNomes.length;c++){
    console.log(arrayNomes[c])
}