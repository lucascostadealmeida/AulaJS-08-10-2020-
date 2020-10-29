/*Um comerciante comprou um produto e quer vendê-lo com um lucro de 45% se o valor
da compra for menor que R$ 50,00; caso contrário, o lucro será de 30%. Desenvolva
uma aplicação em JavaScript que leia o valor do produto e imprima o valor de venda
para o produto. */

//colocando como constante o lucro maior, lucro menor e o valor máximo da compra
const lucro_maior = 0.45;
const lucro_menor = 0.3;
const valor_compra = 50;

//declarando o valor da compra
let valor_produto = 49.43;

//calculando o valor de venda com o lucro maior (45%) e formatando ela
let vl_venda_maior = (valor_produto*lucro_maior) + valor_produto; 
let vl_venda_maior_format = vl_venda_maior.toFixed(2);

//calculando o valor de venda com o lucro menor (30%) e formatando ela
let vl_venda_menor = (valor_produto*lucro_menor) + valor_produto;
let vl_venda_menor_format = vl_venda_menor.toFixed(2);

//verificando se o valor do produto é menor que o valor da compra e imprimindo o cálculo de 45%
if (valor_produto < valor_compra) {
        console.log("Valor da venda: " + vl_venda_maior_format);

}
//se o valor do produto for maior que o valor da compra, imprimir o cálculo de 30%
else{
    console.log("Valor da venda: " + vl_venda_menor_format);
}
