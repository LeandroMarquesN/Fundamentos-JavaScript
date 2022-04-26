/*
video aula do curso:https://www.udemy.com/course/curso-web/learn/lecture/8946358#overview 

Podemos resumir uma função fábrica como um gerador de objetos. Em JavaScript, qualquer função pode retornar um objeto. Mas, quando isso acontece sem o new, é uma função de fábrica. Ou seja, quando uma função não é uma classe ou um construtor, é uma função fábrica.
video aula segunda opinião: https://devpleno.com/factory-function
*/
//factory Simples 
function criarPessoa() {
    return{
        nome:'Ana',
        sobreNome:'Silva'
    }
}

console.log(criarPessoa())


//criando um novo exemplo de função factory com parametro
function personFactory(name) {
    return {
      name: name,
  
      type: 'person'
    }
  }
  
  console.log(personFactory('Tulio'))
  
  console.log(personFactory('João'))