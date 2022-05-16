// Desafio !! onde o proposito e pegar os elementos de um array chamado carrinho que possuem dados no formato json efazer com que retorne somente o valores.

//Note que no formato json as  string possuem aspas duplas e  os numeros não possuem 

const carrinho = [
    '{"Nome": "Borracha ", "Preco": 3.45 }',
    '{"Nome": "caderno ", "Preco": 13.90}',
    '{"Nome": "KIt de Lapis ", "Preco": 41,22 }',
    '{"Nome": "caneta ", "Preco": 7.50 }'
]
//Vamos ter que usar 2 maps para resolver este problema o primerio e chamar o json.parse(json) para transformar as strings em objetos e no segundo map vai receber um objeto e como entrada e returna apenas o preço

//Retornar um array apenas com os precos

//primerio e chamar o json.parse(json) para transformar as strings em objetos
const paraObjeto = json => JSON.parse(json)
//vamos criara uma constante que vai receber como parametro produto e retorna apenas produto.preço
const apenasPreco = produto => produto.preco

//Depois de criado esses dois metodos eu ja posso chamar os 2 maps que vai me retornar o preco que vou ter no final.

//mosrando o resultado 

//Criaremos uma constante resultado que recebe oarray carrinho chamando o (map)e dentro do map chamamos os metodos criados tendo uma função de call back para conseguirmos o resultado.

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)

