//video aula : https://www.udemy.com/course/curso-web/learn/lecture/9211224#overview

//Quando criamos uma referencia para lodash usamos primeiramente o underline (_) quando fazemos o tipo abaixo de imports ele procura dentro de no_module e dentro de node_modules ele vai procurar pelo index.js para executar este lodas e apartir dai temos a disposiçã para usara biblioteca!


/*
Instalamos a biblioteca usando lodash :
https://www.npmjs.com/package/lodash
lodash v4.17.21


A biblioteca Lodash exportada como módulos Node.js.

Instalação
Usando npm: o -g é para instalar de maneira global na maquina

$ npm i -g npm
$ npm i --save lodash
Em Node.js:

// Carrega a compilação completa. 
var  _  =  require ( 'lodash' ) ; 
// Carrega a compilação principal. 
var  _  =  require ( 'lodash/core' ) ; 
// Carregue a compilação FP para métodos iteratee-first data-last imutáveis ​​com curry automático. 
var  fp  =  require ( 'lodash/fp' ) ;

// Carrega as categorias do método. 
var  array  =  require ( 'lodash/array' ) ; 
var  objeto  =  require ( 'lodash/fp/objeto' ) ;

// Métodos Cherry-pick para pacotes menores de browserify/rollup/webpack. 
var  at  =  require ( 'lodash/at' ) ; 
var  curryN  =  require ( 'lodash/fp/curryN' ) ;

*/
const _ = require('lodash')

//vamos criar uma função para sortear um valor entre 1 e 5 onde vamos buscar a função random() dentro de loadash  e vamos usar o setInterval para que execute de 2 em 2segundos lembrando que setInterval é uma função do javaScript e lembrando tambem que poderiam scolocar qualquer numero em vez do 5

setInterval(() => console.log(_.random(1,5)),2000)

//vamos intalar a biblioteca nodemon de maneira global na maquina tambem e para isso vamos usar o comando " sudo npm i -g nodemon"

// para mais informçãoes : https://www.npmjs.com/package/nodemon

//agora temos a nossa disposição todas os comando com nodemon

//nodemon é uma ferramenta que ajuda a desenvolver aplicativos baseados em Node.js reiniciando automaticamente o aplicativo de nó quando são detectadas alterações de arquivo no diretório.

// O nodemon não requer nenhuma alteração adicional em seu código ou método de desenvolvimento. nodemon é um wrapper de substituição para node. Para usar nodemon, substitua a palavra node na linha de comando ao executar seu script.

//note que nesse caminho relativo estamos usando  node "/home/usuario/Documentos/curso uderemy/Curso-Web-Mo-reposi/node/usandoModulosTerceiros.js"
//Ou seja estamos dentro da pasta "node " e assim executamos o comando "nodemon = nomedo arquivo que queremos que execute"
