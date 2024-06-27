const prompt = require("prompt-sync")();
const c = 70;
while (true) {
  const x = Number(prompt("digite seu número"));
  if (x == c) {
    console.log("parabéns, você acertou o número");
    break;
  } else if (x < c) {
    console.log("mais");
  } else if (x > c) {
    console.log(" menos");
  }
}
