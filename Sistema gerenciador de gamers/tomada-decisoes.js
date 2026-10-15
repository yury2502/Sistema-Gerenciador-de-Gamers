const prompt = require('prompt-sync')();

let nome = prompt("nome do jogador: ");
let pontuacao = Number(prompt("pontuação do jogador: "));
let pontuação_minima = 1000;

console.log("Analisando perfil....");

if (pontuacao >= pontuação_minima) 
    console.log("APROVADO! Parabéns " + nome + ", você atingiu a pontuação mínima de " + pontuação_minima + " pontos.");
else
    console.log("REPROVADO! " + nome + ", você não atingiu a pontuação mínima de " + pontuação_minima + " pontos.");

if(isNaN(pontuacao)) {
    console.log("Erro: Por favor, insira uma pontuação válida.");
}