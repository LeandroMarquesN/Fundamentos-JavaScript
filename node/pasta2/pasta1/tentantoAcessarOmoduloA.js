/*
Lembramdo que nesse exercicio estou usano os(..) dois pontos para voltar as pastas para conseguir chegar onde realmete o arquivo que qquero acessar esta

Outra curiosidade é que no sistema linux devemos colocar o nome do arquivo devidamente igual se não noa vai dar certo.

outra coisa dei o nome da constante de atireioPau no gato  para mostrar que daria certo com qualquer nome
*/


// const atireiOpauNogato = require('../../moduloA')


//outra possibilidae de acessar seria substituindo o caminho relativo pelo absoluto clicando em cima do arquivo moduloA e copiando o caminho e substituuindo

const atireiOpauNogato = require('/home/usuario/Documentos/curso uderemy/Curso-Web-Mo-reposi/node/moduloA.js')

//executando o moduloA
console.log(atireiOpauNogato.a)

//OUtra coisa importnte que para acessar o modulo não preciso precisamente passar o caminho relativo ou absoluto do modulo para encontralo se basta eu digitar o nome dele 

//Ex:
// const http = require('http')
// http.createServer((req,res)  => {
//     console.log("ta funcionando")
//     res.write('Bom dia!')
//     req.end()
// }).listen(8080)