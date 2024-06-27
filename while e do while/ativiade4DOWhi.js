const prompt = require("prompt-sync")();
let n = Number(prompt("digite um número"));
let contador;
let i = 0;
do {
  n / i;
  i++;
  contador++;
} while (i < 10);
if (contador == 2) {
  console.log("Não é primo");
} else {
  console.log("é primo");
}
