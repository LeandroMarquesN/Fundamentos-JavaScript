/*
1ªvamos criar uma lista de nomes com um array
2ªvamos criar um laço para percorrer o array
3ªvamos criar uma consicional para encontrar o nome em especifico dentro do array
4ªvamos passar a menssagem de nome encontrado
5ªvamos parar o percursso do laço quando o nome ser encontrado. com o break

*/let  nome2 = "Daniel", nome1 = "leila" ,nome3 = "Leandro" ,nome4="Maria"

/*1ª*/const Familia_nascimento =["Leandro","leila","Maria","Fabricia","Laura","Daniel"]

/*2ª*/for(let i in Familia_nascimento){
/*3ª*/      if(Familia_nascimento[i]==nome2){
                console.log(`Seu ${Familia_nascimento[i]} é o chefão da casa!!`)
                break
            }else if(Familia_nascimento[i]== nome1){
                console.log(`${nome1} é a caçula da familia!!`)
            
            }else if (Familia_nascimento[i] == nome3){
                console.log(`${Familia_nascimento[i]} é o filho mais velho`)
            }else if (Familia_nascimento[i] == nome4){
                console.log(`Dona ${nome4} é a esposa do seu ${nome2} !`)
            }else {
                console.log(`\t\t${Familia_nascimento[i]} não faz parte da familia dos Nascimento!!`)
            }
        }
console.log("Fim dos integrandtes")