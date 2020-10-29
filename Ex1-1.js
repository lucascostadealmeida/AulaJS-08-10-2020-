/* Calcule a soma dos inteiros de 1 a 10 */

/*declarando como variável i (que recebe o número mínimo para ser apresentado) e a variável soma (que receberá o valor total da 
somatória entre o intervalor desejado) */
let i_min = 1;
let soma = 0;
let i_max = 10;

//fazendo a somatória do intervalo declarado
do{
    soma += i_min++;

}while(i_min <= i_max);

console.log("");
//imprimindo o total
console.log("A soma dos valores deu: " + soma);