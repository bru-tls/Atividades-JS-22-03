const leia = require('readline-sync');

let n1, soma =0 , i=0

do{

    n1 = leia.questionInt("Digite um numero: ", {limitMessage: 'Digite um numero inteiro'})

    soma = (soma+n1)


}while (n1 !== 0 )
console.log("Total da soma: " + soma)


/*Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. 
o final, mostre na tela a soma de todos os números digitados, que sejam positivos.*/