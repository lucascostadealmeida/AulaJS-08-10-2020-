/*Uma faculdade oferece um curso que prepara os candidatados a obter licença estadual
para corretor de imóveis. No ano passado, dez alunos que concluíram esse curso
prestaram o exame. A universidade quer saber como foi o desempenho dos seus alunos
que concluíram esse curso prestaram o exame. Você foi contratado para escrever de
programa que resuma os resultados. Para tanto, você recebeu uma lista desses 10
alunos. Ao lado de cada nome é escrito 1 se o aluno, passou no exame ou 2 se o aluno
foi reprovado.
Desenvolva uma aplicação em JavaScript que:
a) Insira a cada resultado do exame (isto é, um 1 ou um 2). Exiba a mensagem
“Inserir resultado” na tela toda vez que o programa solicitar o resultado do outro
exame.
b) Conte o número de cada tipo de resultado.
c) Exiba um resumo dos resultados do exame indicando o número de alunos
aprovados e reprovados.
d) Se mais de oito estudantes forem aprovados no exame, imprima a mensagem
“Bonus to Instructor!”
 */

//declarando o total de alunos
const alunos = 10;

//colocando como variável a situção(onde será armazenado a situação do aluno); aprovado e reprovado
let situacao = {};
let aprovado = 0; 
let reprovado = 0;

//fazendo o usuário digitar a situação dos alunos e contabilizando as respostas de aprovados e reprovados
for(let i = 0; i < alunos; i++){
   situacao["status"] = prompt("Insira o resultado do exame:");
      if (situacao["status"]==1) {
         aprovado++;
   }else{
         reprovado++;
      }

}

//esta condição é se obter 8 alunos como aprovado
if (aprovado == 8) {
   console.log("Bonus to Instructor");
}

console.log("");

//imprimindo a quantidade de alunos aprovados e reprovados
console.log("Alunos Aprovados: " + aprovado);
console.log("Alunos Reprovados: " + reprovado);