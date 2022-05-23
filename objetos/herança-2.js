//<<!!ATENÇAO LEIA O DOCUMENTO NA ORDEM ESCREITA !!>>

//Cadeia de prototipos ((Prototype - chain))

//A ideia aqui fazer com que o efeito cascata da hierarquia seja mantido na busca por atributos, onde se consiste em fazer uma varredura na arvore hierarquica dos objetos em busca do atributo pesquisado,onde vamos estabeecer a hierarquia resiguinando os atributos com seus __proto__ ou prototypos.

Object.prototype.atri0 = 'd'//não é uma pratica recomendada evite fazer isso <<!!atençao!!>>

const avo = {atri1: 'a'}

const pai = {__proto__:avo,//nesta linha estamos atribuindo o "prototype do (pai)" sendo a const "avo" onde será feito a busca caso não encontre o atributo correspondente aqui no "pai"
        atri2:'b',   
        atri3:'e' 
}

const filho = {
    __proto__: pai,//O mesmo fizemos nesta linha atribuitmos o "__proto__ do (filho) sendo o (pai) para que caso nao encontre aqui o atributo em questão seja feito a varredura no "pai" e se não enconstrar no "pai" ele vai buscar no "avo" 
    atri3: 'c'
}
//lembrando que a "const" (avo) tem como (__proto__) o object.prototype.

//Agora vamos fazer um teste onde vamos mandar mostrar na tela o "atri1" do "filho" mas como o "filho não possui este (atri1) o sistema vai procurar no __proto__ do filho que é o (pai) e como tambem nao vai enconstrar o atri1 no pai ele vai buscar no __proto__ do pai que é o avo e assim ele vai encontrar respeitando de fato a hierarquia do __proto_ que estabelecemos "
console.log(filho.atri1)

//Na linha abaixo estamos fazendo uma varredura na hierarquia dos __proto__ estabelicido por nos aqui neste codigo onde atribuimos a Object.prototype.atri0 = 'd' onde somente lá será possivel encontrar ja que o "filho" não possui este valor.
console.log(filho.atri0)

//Agora vamos fazer mais um teste onde vamos mostrar na tela os atri1, atri2 , atri3 porem a const filho so possui o valor atri3 ! porem será feito a busca nos __proto__ resiguinados.
console.log("\n************")
console.log(filho.atri1,filho.atri2,filho.atri3,filho.atri0)

//Agora vamos fazer um outro teste onde vamos criar mais um "atri3" com o valor "e" porem vamos criar este "atri3" na const (pai) e vamos mostrar na tela fazendo a varredura começando com o (filho) porem o Filho  ja possui este atri3 e quando o sistema da linguagem fazer a proccura  ele ja vai encontrar o atri3 no filho por assim omitindo o atri3 do pai este efeito é chamado de shadowing sombreamento. entao note que o valor a ser mostrado será o "c" e não o "e"
console.log(`valor a ser mostrado será o "c" e não o "e"`)
console.log(`valor do atri3 : ${filho.atri3}`)