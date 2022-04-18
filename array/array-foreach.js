/*
    foreach - è uma forma de percorrer um array temos outras maneira de percorrer comousando o map filter e reduce

    quando colcoamos a função de callback para o forEach temos que respeitar aordem dos parametros da função de callback onde o primeiro é o elemento de fato e o segundo sempre será o indice.

    O terceiro parametro d função de callback é o proprio array em questao

    OU seja a função callback que passamos para um foreach ela recebe 3 paramentros  o elemento o indice e o array.
    podemos suprimir quantos parrametros nos queiramos porem respeitando a ordem.

*/
//Criando um array
const aprovados = ['Agatha','Aldo','Daniel','Raquel']

//Agora vamos percorrer a lista usando o foreach e dentro deste parenteses vamos aplicar uma callback e essa callback vai ser chamada para cada iteração  que for feita no array ou seja para cada elemento que for percorrido no array ele vai chamar a callback passando o proprio elemento e o indice correspondente da quele elemento.
//na funcção de calback que vai ser pasada como parametro ela recebe dois parametros o proprio elemento que estou percorrendo e osegundo parametro será o indice do elemento que está sendo executado.
aprovados.forEach(function(nome,indice){
    console.log(`${indice + 1}) ${nome}`)
})
//para cada elemento do array a função de callback será chamada.
//Dentro do  forEach tem um laço (for) onde ele vai percorrer o aaray passado que no caso é o "Aprovados"

//===================================================
//Ex2. Vamos passar um arrow fucntion com um unico parametro
aprovados.forEach(nome => console.log(nome) )

//Ex3.Passando 2 parametros na arrow function
aprovados.forEach((nome,indice) => console.log(indice + 1,')', nome))

//Posso aramazenara está função em uma variavel e passar está função para o forEach
const exibirAprovados = (nome,indice) => console.log(indice +1,")",nome)
aprovados.forEach(exibirAprovados)

//O terceiro parametro da função de callback é o proprio array em questao
console.log('\n')
const exibirAprovados2 = (nome,indice,array) => console.log(indice +1,")",nome,array)
aprovados.forEach(exibirAprovados2)