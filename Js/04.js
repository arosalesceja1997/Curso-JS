"use strict";

// Programa mostrar numeros entre dos numeros impares

let n1 = parseInt(prompt("Numero x:", 0));
let n2 = parseInt(prompt("Numero y:", 0));

for (var x = n1; x <= n2; x++) {
  if (x % 2 != 0) {
    document.write("<h6>" + x + "</h6>");
  }
}
