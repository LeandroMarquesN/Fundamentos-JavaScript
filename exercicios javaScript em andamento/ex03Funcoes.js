// 03)​ Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

function pontenciacao(base,expoente){
   valor = Math.pow(base,expoente)
   //podemos fazer com o metodo novo 
   valor = base ** expoente
    return valor
}
valor1 = 2 
valor2 = 4

console.log(`A podentencia de ${valor1} elevado a ${valor2} é :` + pontenciacao(valor1,valor2))



