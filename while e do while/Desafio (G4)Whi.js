const prompt = require("prompt-sync")();
let contador = 1;

while (true) {
  let faces_do_dados = 20;
  let random = Math.random() * faces_do_dados;
  random = Math.ceil(random);
  console.log(random);
  if (random == 1) {
    console.log("você voltará 1 espaço");
  } else if (random <= 11) {
    console.log("você não avança");
  } else if (random <= 19) {
    console.log("você avançará 1 espaço");
  } else if (random >= 20) {
    console.log("você avançará 10 espaços");
    break;
  }
  contador++;
  if (contador >= 10) {
    break;
  }
}
console.log(contador);
