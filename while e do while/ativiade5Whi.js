const prompt = require("prompt-sync")();
const U = "user";
const S = 1234;
while (true) {
  const u = prompt("digite seu usuario");
  const s = prompt("digite seu senha");
  if (U == u && S == s) {
    break;
  } else if (U != u && S != s) {
    console.log("dados incorretos");
  }
}
