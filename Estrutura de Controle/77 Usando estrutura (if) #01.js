function SoBoanoticia(nota) {
    if (nota >= 7) {
        console.log(`Parabens sua nota é ${nota} e você está aprovado`)
    } else {
        console.log(`Infelizmente sua nota foi ${nota} Reprovado!`)
    }
}
SoBoanoticia(8.1)
SoBoanoticia(6, 1)
//Exercictando o if else
//função retorna uma menssagen de acordo com o parmetro recebido
const noticia = function (saber){
        if(saber== 'sim'){
            console.log("Voce é um curioso")
        }else{
            console.log("Isso mesmo! vai cuida da sua  vida!!")
        }
}
//variavel para passara como parametro
let declaração = "não"//==> mude para não caso queira ver a outra menssagen

//chamando a função atraves do nome da constante noticia
noticia(declaração)
/*
valores falsos no javaScripty:

null, underfined,NaN,'',0 ==> Todos esses valores retornam um valor falso

valores verdadeiros:
-1,'  ', ==> esses valores retornam veradeiro.

*/