const leia = require("readline-sync");

let matrizInteiros = new Array(3);
let diagonalPrincipal= "", diagonalSecundaria= "", soma1=0, soma2=0

for(let indice=0; indice < matrizInteiros.length; indice++)
{
    matrizInteiros[indice] = Array(3)}


for (let indice = 0; indice < matrizInteiros.length; indice++){
  
    for (let indiceColuna = 0; indiceColuna < matrizInteiros.length; indiceColuna++){
      
      matrizInteiros[indice][indiceColuna] = leia.questionInt("Digite o numero:")
      }
}
console.table(matrizInteiros)

for (let indice = 0; indice < matrizInteiros.length; indice++){
diagonalPrincipal += matrizInteiros[indice][indice] + " "
soma1 += matrizInteiros[indice][indice]
}

for (let indice = 0; indice < matrizInteiros.length; indice++){
    diagonalSecundaria += matrizInteiros[indice][matrizInteiros.length -1 - indice] + " "
    soma2 += matrizInteiros[indice][indice]
    }
       
        
    console.log("Diagonal principal: " + (diagonalPrincipal))
    console.log("Soma diagonal principal: " + (soma1) + "\n")
  

console.log("Diagonal secundaria: " + (diagonalSecundaria))
console.log("Soma diagonal secundaria: " + (soma2))