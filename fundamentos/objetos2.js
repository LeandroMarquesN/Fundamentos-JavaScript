/*


Exemplo de objetos aninhados :

Neste mini sistema estamos fazendo um conjunto de modelos de celuares onde vai aramazenar 5 modelos e suas confgurações.

Modelos de celulares e suas configurações.
*/
const modelo_cel = {
    motorola : {
        moto_g : {
            configuração_Mg: {
                memoria_RanM : "3 MemoriaRam",
                memoria_internaM : "24 Giga",
                processadorM:"Snapdragon15"
            }
        },
        moto_x : {
            configuração_Mx: {
                memoria_RanMx : "4 MemoriaRam",
                memoria_internaMx : "44 Giga",
                processadorMx:"Snapdragon35"
            }
        }
    },
    sansung : {
        s3max :{
            configuração_Smax: {
                memoria_RanSmax : "5 MemoriaRam",
                memoria_internaSmax : "44 Giga",
                processadorSmax:"Snapdragon40"
            } 
        },
        s3min :{
            configuração_Smin: {
                memoria_RanSmin : "5 MemoriaRam",
                memoria_internaSmin : "44 Giga",
                processadorSmin:"Snapdragon40"
            }
        }

    },
    Aplee : {
        Iphone :{
            configuração_Iph: {
                memoria_RanS_Iph : "3 MemoriaRam",
                memoria_interna_Iph : "100 Giga",
                processador_Iph:"Snapdragon90"
            }
        }
    }

}
//Area para mostrar a opção desejada
const mostrar_modelo_cel = function(opcao){

            switch (opcao) {
                case 1 :
                    //motorolo Moto G
                    console.log(`Modelo motorola : \nMoto-G = ${modelo_cel.motorola.moto_g.configuração_Mg.memoria_RanM} / Memoria Interna : ${modelo_cel.motorola.moto_g.configuração_Mg.memoria_internaM}/ Processador : ${modelo_cel.motorola.moto_g.configuração_Mg.processadorM}`)
                   
                break
                case 2 :
                    //motorola Moto X
                    console.log(`Modelo Motorola : \n Moto X = ${modelo_cel.motorola.moto_x.configuração_Mx.memoria_RanMx} /Memoria Interna ${modelo_cel.motorola.moto_x.configuração_Mx.memoria_internaMx} / Processador ${modelo_cel.motorola.moto_x.configuração_Mx.processadorMx}`)
                    break
                case 3 :
                    //Sansug smax
                    console.log(`Modelo Sansung :\ns3Max =  ${modelo_cel.sansung.s3max.configuração_Smax.memoria_RanSmax} / Memoria Interna : ${modelo_cel.sansung.s3max.configuração_Smax.memoria_internaSmax} / Processador : ${modelo_cel.sansung.s3max.configuração_Smax.processadorSmax}`)
                break
                case 4 :
                    //Sansung smin
                    console.log(`Modelo Sansung :\ns3min = ${modelo_cel.sansung.s3min.configuração_Smin.memoria_RanSmin} / Memoria Interna : ${modelo_cel.sansung.s3min.configuração_Smin.memoria_internaSmin} / Processador : ${modelo_cel.sansung.s3min.configuração_Smin.processadorSmin}`)
                break
                case 5 :
                    //Iphone
                    console.log(`MOdelo Iphone : \n Iphone = \n ${modelo_cel.Aplee.Iphone.configuração_Iph.memoria_RanS_Iph} / Memoria Interna : ${modelo_cel.Aplee.Iphone.configuração_Iph.memoria_interna_Iph}   / Processador : ${modelo_cel.Aplee.Iphone.configuração_Iph.processador_Iph}`)

                break
               
            }
}
//escolhendo o modelo de celular
console.log(`Escolha o modelo que deseja ver as configurações:\n
(1)\t=>\tmoto-g\n(2)\t=>\tmoto-x\n(3)\t=>\tsansung s3Max\n(4)\t=>\tsansung s3min\n(5)\t=>\tAplee Iphone\n`)
//atribua o valor de 1 a 5  a variavel escolha 
let escolha = 5

mostrar_modelo_cel(escolha)
