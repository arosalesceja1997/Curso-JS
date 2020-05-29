"use strict";

let suma = 0;
let cont = 0;
let n1;

do {
  n1 = parseInt(prompt("Ingresa un numero positivo:", 0));
  if (isNaN(n1)) {
    n1 = 0;
  } else if ((n1) => 0) {
    suma += n1;
    cont++;
  }
} while (n1 >= 0);

alert("Suma igual: " + suma);
alert("La media igual: " + suma / cont);
