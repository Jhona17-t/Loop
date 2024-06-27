const prompt = require("prompt-sync")();
let n = Number(prompt("digite um número"));
let contador = n;
let i = 1;
do {
  contador = contador * i;
  i++;
} while (i <= n);
console.log(contador);
