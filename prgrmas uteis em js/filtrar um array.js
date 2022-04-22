/*
Neste program estaremos criando um filtro de um array onde vamos especificara a propriedade que deve ser encontrada que no casso será (Ação)
*/
const filmes =[
    {titulo:"Vingadores",categoria:"Ação"},
    {titulo:"Batman VS Superman", categoria:"Ação"},
    {titulo:"Titanic",categoria:"Drama"}
]
const filmesDeAção = filmes.filter((filme)=> filme.categoria === "Ação")

console.table(filmesDeAção)