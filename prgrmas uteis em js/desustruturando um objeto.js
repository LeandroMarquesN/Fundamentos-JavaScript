/*
Neste progrma estaremos fazendo uma desestruturação em um objeto para atribuir uma variavel.
*/
const usuario = {
    nome : "Leandro",
    sobreNome:"Marques",
    email: "Leandromarques.n@gmail.com"
}
const {email} = usuario

console.log(email)