/*Nesta aula estaremos vendo tipos diferentes de declarar uma função

*/
//forma tradicional ==> chamada de (function declaration)
function soma(x,y){
    return x +y
}

//Outra forma seria de atribuir esta funcação á um avariavel ou constante chamda de (function expression)
const sub = function (x,y) {
    return x -y
}
//temos tambem a Named function expression
//que alem de termos uma constante que vai armazenar está função no lugar de termos um afunção anonima teremos uma função nomiada. A unica vantagem da indentificação no momento que estivermos debugando o codigo, porem é um aforma pouco usada

const mult = function mult(x,y) {
    return x + y
}
