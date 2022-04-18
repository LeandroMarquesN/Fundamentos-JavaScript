
console.log(typeof(i))
for (var i = 0; i < 10; i++) {
    console.log(`Essa variavel (i) so existe dentro deste escopo de repetição ${i}`)
}
console.log(`Quando a variavel (i) sai do escopo da repetição ela vai valer ${i} pois o valor  :`, i,'é o valor maximo do laço de repetição')