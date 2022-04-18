
//===============Exercicio para array=============================

        //sempre crie seus xercicios aqui leandro 

//================================================================
// Os elementos no array sao separados por (,) virgulas
array = ["numero 0", 1, 2, 3, 4, 5, "a", `b`, 'c','d']
console.log(array)
console.log(array[0])
console.log(`com o length verifico o tamanho do meu array que possui : ${array.length} posições`) // //com o length verifico o tamanho do meu array

//===========================================
//Com o metodo push vc adciona elementos no array
/*na logica abaixo estou dizendo para o meu array que quero que ele adicione 3 elementos no meu array. 
*/
array.push({ numero: 3 }, false, null, `teste`)
console.log(array)
//============================================
// com o pop ele mostrar o ultimo elemnto 
console.log(array.pop())
//com o delete : exclui o elemento do indice desejado
delete array[8] // perceba que o elemento "d" que está na posição 8 foi escluido
console.log(array)

//==============================================
//mosstra o tipo do array typeof

console.log(typeof array)