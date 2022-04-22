/*
Neste programa nos podemos encontrar um elemento especifico do array pelo valor de sua propriedade
*/
const filmes =[
    {titulo:"Vingadores"},
    {titulo:"BAtman VS Superman"},
    {titulo:"Titanic"}
]
const filmesTitanic = filmes.find((filme)=>filme.titulo === "Titanic")

console.log(filmesTitanic)
console.log(filmesTitanic.titulo)