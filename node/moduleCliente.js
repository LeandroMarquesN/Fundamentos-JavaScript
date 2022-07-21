//Aqui vamos importar os arquivos  de moduloA e moduloB
//E para importar vamos usar a palvra reservada require()


//Aqyui estamos referenciando com ./ pois estamos navegando para buscar o arquivo moduloA e ele se encontra na mesma pasta  então estamos usando o caminho relativo
const moduloA = require('./moduloA')
const moduloB = require('./moduloB')
const moduloC = require('./pasta2/pasta1/encontrado.js')

//Executando os atributos dos objetos
const log = (a) => {
    console.log(a)
}
log(moduloA.ola)
log(moduloA.a)
log(moduloB.bomdia)
log(moduloB.boaNoite())
log(moduloA.bemVindo)
log(moduloB.falaLeandro())
log(this)
this.a = 'segunda tentativa'
log(this.a)
log(moduloC.soma(50,30))