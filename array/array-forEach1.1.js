
//criando o array
const nomes = ['leandro','livia',"lavinia","maria",'Daniel']

//cirando a function call back  mas eu poderia ter criado essa função dentro do forEach.

//primerio parametro do forEach é o elemento 
//O segundo parametros sempre será  o indice
//O teceiro é o proprio array

const callBackNomes = function(nome,indice) {
    console.log(`${indice +1 } ) ${nome}`)
}


nomes.forEach(callBackNomes)
console.log("============ pulando a linha ============")

//Vamos criar um segundo array
const  esportes = ['natação',"musculação",'futebol','capoeira',"danca"]
//vamos percorrelo usando o forEach so que nossa calback será um aarrow function
esportes.forEach((nome,indice) => {console.log(`${indice + 1}) ${nome}`)})

//podemos fazer assim
console.log("============ pulando a linha ============")
esportes.forEach(callBackNomes)