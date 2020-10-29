/*Para cada conjunto de valores abaixo, escreva o código em JavaScript usando laço(s)
onde na opção a é para ordenar o array de forma crescente e no caso do segundo, a
letra b é de forma decrescente.
a) 10 9 8 7 6 5 4 3 2 1
b) 0 1 4 9 16 25 36 49 64 81 100 */

//declarando meus arrays
const arrayA = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const arrayB = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 ];


console.log("Ordenando pela função A-B e B-A");
console.log(" ");

//função para ordenar em ordem crescente
function compararNumeros_cres(a, b) {
    return a-b;
}

//função para ordenar em ordem decrescente
function compararNumeros_decre(a, b) {
    return b-a;
}
console.log("Array A: " + arrayA.sort(compararNumeros_cres));
console.log("Array B: " + arrayB.sort(compararNumeros_decre));

console.log(" ");
console.log("Ou por FOR");

console.log(" ");
console.log("Array A:");

//imprimindo o arrayA em ordem crescente
for (let i = 0; i < arrayA.length; i++) {
    const element = arrayA[i];
    console.log(element);
}

console.log(" ");
console.log("Array B:");

//imprimindo o arrayB em ordem decrescente
for (let i = 0; i < arrayB.length; i++) {
    const element = arrayB[i];
    console.log(element);
}