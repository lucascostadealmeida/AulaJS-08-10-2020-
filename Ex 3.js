

const aumento1 = 0.3;
const aumento2 = 0.25;
const aumento3 = 0.2;
const aumento4 = 0.15;
const aumento5 = 0.1;

let salario = 3000.01;

//aumento do salário de até 1.045,00
let salario_final1 = (salario*aumento1) + salario;


//aumento do salário entre 1.045,01 até 1.500,00
let salario_final2 = (salario*aumento2) + salario;


//aumento do salário entre 1.500,01 até 2.600,00
let salario_final3 = (salario*aumento3) + salario;


//aumento do salário entre 2.600,01 até 3.550,00
let salario_final4 = (salario*aumento4) + salario;


//aumento do salário acima de 3.550,00
let salario_final5 = (salario*aumento5) + salario;


//imprimindo o aumento salarial de 30%
if (salario <= 1045.00) {
    console.log("Seu salário foi atualizado para: " + salario_final1.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2}));
}

//imprimindo o aumento salarial de 25%
else if ((salario > 1045.00) && (salario <= 1500.00)) {
    console.log("Seu salário foi atualizado para: " + salario_final2.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2}));
}

// //imprimindo o aumento salarial de 20%
// else if ((salario > 1500.00) && (salario <= 2600.00)) {
//     console.log("Seu salário foi atualizado para: " + salario_final3.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})); 
// }


// else if ((salario > 2600.00) && (salario <= 3550.00)) {
//     console.log("Seu salário foi atualizado para: " + salario_final4.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2}));
// }


// else if (salario > 3550.00) {
//     console.log("Seu salário foi atualizado para: " + salario_final5.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2}));
// }
