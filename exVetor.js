/*Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, 
construa um algoritmo que consiga pesquisar dados no vetor, onde o usuário irá digitar um número 
e o programa deve exibir na tela a posição deste número no vetor. 
Caso o número não seja encontrado, a mensagem: “Não foi encontrado!” deve ser exibida na tela. 
*/

const leia = require('readline-sync')

let vetorN = [9,31,28,5,57,65,34,87,12,42,96]

n1 = leia.questionInt("Digite o numero que voce quer localizar:")


for (let i = 0; i < vetorN.length; i++) {
    
    if (vetorN[i] === n1) {
        console.log(`O numero ${n1} esta localizado na posicao: ${i}`)

     } else (i === vetorN.length)
        console.log(`Não foi encontrado!`)
        break
     }
    
    