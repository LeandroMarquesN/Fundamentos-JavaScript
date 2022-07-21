

//https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/



//Gerenciando objetos

// Cria um objeto com um objeto existente como protótipo
Object.create()

//exemplo de criação de objetos

// Imagine que você tem uma organização representada pororgObject

const orgObject = { company: 'ABC Corp' };
// E você deseja criar funcionários para esta organização. Claramente, você quer todos os objetos de funcionário.

const employee = Object.create(orgObject, { name: { value: 'EmployeeOne' } });

console.log(employee); // { company: "ABC Corp" }
console.log(employee.name); // "EmployeeOne"

//+=====================================================

// Adicionando ou alterando uma propriedade de objeto

Object.defineProperty(object, property, descriptor)

// Adicionando ou alterando as propriedades do objeto
Object.defineProperties(object, descriptors)

// Acessando Propriedades
Object.getOwnPropertyDescriptor(objeto, propriedade)

// Retorna todas as propriedades como um array
Object.getOwnPropertyNames(objeto)

// Acessando o protótipo
Object.getPrototypeOf(objeto)

// Retorna propriedades enumeráveis ​​como um array
Object.keys(object)


