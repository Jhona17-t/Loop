const prompt = require("prompt-sync")();
let maior;
let menor;
let i = 0;
do {
  const x = Number(prompt("digite seu número"));
  if (x > maior) {
    maior = x;
    menor = x;
  }

  if (x < menor) {
    menor = +x;
  }
  i++;
} while (i < 10);
console.log("maior número " + maior);
console.log("menor número " + menor);
