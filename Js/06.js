"use strict";

// Programa mostrar numeros entre dos numeros

let n1 = parseInt(prompt("Numero x:", 0));
let n2 = parseInt(prompt("Numero y:", 0));

for (var x = n1; x <= n2; x++) {
  document.write(x + " - ");
}
