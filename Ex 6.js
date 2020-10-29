/*Desenvolva uma aplicação em JavaScript para simular o lançamento de dois dados em
uma jogada de 10. A soma dos dois valores deve então ser calculada. Cada dado pode
mostrar um valor de 1 a 6, portanto a soma dos valores irá variar de 2 a 12. Imprima
quando o resultado da soma for par e quando for impar e também a quantidade total de
pares em impares ao final. */

//declarando como constates o max e min da somatória dos dados e o total de jogadas
const max = 6;
const min = 1;
const jogadas = 10;


//declarando como variável par e impar, a soma dos dados e os dados que serão lançados
let par = 0;
let impar = 0;
let soma_dado;
let dado1 = 0;
let dado2 = 0;

//jogando os dados até o máximo de jagadas, fazendo a sua soma e falando se deu par ou impar
for(let i = 0; i < jogadas; i++){
    dado1 = Math.floor(Math.random() * max) + min;
    dado2 = Math.floor(Math.random() * max) + min;

    soma_dado = dado1 + dado2;

    console.log("A soma deu " + soma_dado + (",portando é"));
    if ((soma_dado%2)==0){
        console.log("Par");
        par++;
    }else{
        console.log("impar");
        impar++;
    }
}

//imprimindo a quantidade de pares e impares no final
console.log("");
console.log("Quantidade de pares: " + par);
console.log("");
console.log("Quantidade de impares: " + impar);



