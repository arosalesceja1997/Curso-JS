"use strict";
// Ejecicio 1
// Mayor, menor y igual.

let n1 = parseInt(prompt("Valor 1:", 0));
let n2 = parseInt(prompt("Valor 2:", 0));

while (n1 < 0 || n2 < 0 || isNaN(n1) || isNaN(n2)) {
  n1 = parseInt(prompt("Valor 1:", 0));
  n2 = parseInt(prompt("Valor 2:", 0));
}

if (n1 > n2) {
  alert("Numero 1 es mayor al 2");
} else if (n2 > n1) {
  alert("Numero 2 es mayor al 1");
} else {
  alert("Numeros iguales");
}

function hello() {
  alert("Hola mundo");
}
