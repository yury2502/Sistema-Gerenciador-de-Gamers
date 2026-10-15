const prompt = require("prompt-sync")();

console.log("--------- Cadastro de novo recruta ---------");
let novonome = prompt("Digite o nome do novo recruta: ");

let novapontuação = Number(prompt("Digite a pontuação deste novo jogador: "));

console.log("Maravilha! Parabéns  Jogador" + novonome + " cadastrado com " + novapontuação + " pontos.");

