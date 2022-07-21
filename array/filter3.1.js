const produtos = [
    {nome:'Notebook',preco:2500, fragil: true},
    {nome:'Ipad Pro',preco:5000, fragil: true},
    {nome:'cueca',preco:20, fragil: false},
    {nome:'Copo',preco:5, fragil: false},
]







const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil === true

console.log( produtos.filter(caro).filter(fragil))
