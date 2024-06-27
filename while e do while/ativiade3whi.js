const prompt = require("prompt-sync")();
let maior;
let menor;
let i = 0;

while (i < 10) {
  const x = Number(prompt("digite seu número"));

  if (i == 0) {
    maior = x;
    menor = x;
  }

  if (x > maior) {
    maior = maior + x;
  }
  if (x < menor) {
    menor = menor + x;
  }
  i++;
}
console.log(maior);
console.log(menor);
