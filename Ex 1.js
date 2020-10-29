/*Desenvolva uma aplicação em JavaScript para ler o nome, as três notas e o número de
faltas de um aluno e escrever qual a sua situação final: Aprovado, Reprovado por Falta
ou Reprovado por Média. A média para aprovação é 70 e o limite de faltas é 25% do
total de aulas. O número de aulas ministradas no semestre foi de 80. A reprovação por
falta sobrepõe a reprovação por Média. */

//colocando como constante a média e o máximo de faltas teste
const media = 70;
const max_falta = 20;

//declarando o nome do aluno, notas e faltas do aluno
let nome_aluno = "Lucas";
let nota1 = 45;
let nota2 = 65;
let nota3 = 80;
let faltas_aluno = 12;

//fazendo a média do aluno
let media_aluno = (nota1 + nota2 + nota3)/3;

//formatando a média do aluno
let meida_aluno_format = media_aluno.toFixed();

//verificando se a média e falta estão de acordo com a regra
if ((media_aluno >= media) && (faltas_aluno <= max_falta)) {
        console.log("Aluno: " + nome_aluno);
        console.log("Situação: Aprovado");
        console.log("Média final: " + meida_aluno_format);
        console.log("Faltas: " + faltas_aluno);
        
}
//se o aluno passar o limite de faltas, ele cairá aqui
else if ((media_aluno >= media) && (faltas_aluno > max_falta)) {
            console.log("Aluno: " + nome_aluno);
            console.log("Situação: Reprovado por falta");
            console.log("Média final: " + meida_aluno_format);
            console.log("Faltas: " + faltas_aluno);
}
//se o aluno ficar com uma média a baixa do limite, ele cairá aqui
else{
    console.log("Aluno: " + nome_aluno);
    console.log("Situação: Reprovado por média");
    console.log("Média final: " + meida_aluno_format);
    console.log("Faltas: " + faltas_aluno);

}
