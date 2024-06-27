const prompt = require("prompt-sync")();
let numero = Number(prompt("digite um número"));
let contagem = 0;
for (let i = 1; i <= numero; i++) {
  if (numero % i == 0) {
    contagem++;
    console.log(i, numero);
  }
}
if (contagem == 2) {
  console.log("primo");
} else console.log("não é primo");
