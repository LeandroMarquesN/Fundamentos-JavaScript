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

  //criando um novo exempo :
  function MInhasQaulidades(q1='alpha',q2='beta',q3='omega') {
    this.quali = {
      qua1 :q1,
      qua2 :q2,
      qua3 :q3
    }
    return `\nEssas são as minnhas qualidades:\n${q1}, ${q2}, ${q3}!`
     
    
  }
  console.log(MInhasQaulidades('bonito','legal','gentil'))
  console.log(MInhasQaulidades('chato','folgado','mulherengo'))
  //Quando não é passado nenhu parametro é passado para a função! os valores definidos como padrão são mostrados na tela!. 
  console.log(MInhasQaulidades())