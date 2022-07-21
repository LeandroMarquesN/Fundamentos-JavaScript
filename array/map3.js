'use strict'

Array.prototype.map2 = function(callback) {
    const newArray =  []
    for(let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i , this))
    }
}

const carrinho = [
    '{"Nome": "Borracha ", "Preco": 3.45 }',
    '{"Nome": "caderno ", "Preco": 13.90}',
    '{"Nome": "KIt de Lapis ", "Preco": 41.22 }',
    '{"Nome": "caneta ", "Preco": 7.50 }'
]


const paraObjetos = json => JSON.parse(json)

const apenasPreco = produto => produto.preco 

const result = carrinho.map2(paraObjetos).map2(apenasPreco)

console.log(result)
result.forEach((nome,indice) => console.log(`${indice + 1} ) ${nome}`))

