/*
Este programa percorre um array e identifica os elementos dentro dele

*/
const array = [{nome:"Leandro"},{nome:"Livia"},{nome:"lavinia"}]

array.forEach((elemento)=>{
    console.log(elemento.nome)
})

array.forEach((i) => {
    if(i.nome == "lavinia"){
         console.log(`Lavinia é muito linda`)
    }
})
