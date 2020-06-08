// function frutas(x1, x2, ...xn) {
//   console.log(x1);
//   console.log(x2);
//   console.log(xn);
// }

// let x = [1, 2, 3];

// frutas(x, "10", 2, 3, 4);
// Parametro de tipo rest y spread

// funciones anonimas
// funcion que no tiene nombre

/*
var pelicula = function (nombre = "anthony") {
  return "Nombre de la peliculas es: " + nombre;
};

function sumar(x1, x2, x3, x4) {
  var suma = x1 + x2;
  x3();
  x4(suma);
  return suma;
}

sumar(
  5,
  5,
  (data = 15) => {
    console.log("La suma: " + data);
  },
  function (data = 1) {
    console.log("Por dos: " + data * 2);
  }
);
*/

var x1 = 123456;
var x2 = "Hola mundo como estan";
var x3 = "soy anthony";

// Para convertir a texto .toString()

// console.log(x3.toUpperCase()); // Convertir a mayusculas
// console.log(x3.toLowerCase()); // Convertir en minusculas

// var busqueda = x2.indexOf("un"); // Buscar palabra en un string
// var busqueda = x2.search("mu"); // Es igual a indexOf
// busqueda = x2.match(/o/g); // Se puede usar con expreciones regulares
// busqueda = x2.substr(5, 8); // Saca las letras opalabras en ese rango
// busqueda = x2.charAt(0); // Saca la letra que se encuentre en esa posicion
// busqueda = x2.startsWith("Hola"); // Busca al inicio del string
// busqueda = x2.includes("co"); // Busca la palabra en todo el string
// busqueda = x2.replace("Hola", "anthony"); // Renplaza un dato por otro
// busqueda = x2.slice(0, 3); // Regresa una palabra que este entre ese rango
// busqueda = x2.split(" "); // Separa por lo que queramos
// busqueda = x2.trim(); // Quita los espacios al inicio y al final de un string
// console.log(busqueda);

// var nom = "Anthony";
// var ape = "Rosales";

// Comillas invertidas Alt+96 Interpolando variables con ${}
// var txt = `
// <h1> ${nom} ${ape} </h1>
// `;

// document.write(txt);

/*

var cosas = [1, 2, 3, 4, 5];

console.log(cosas);
cosas.push(6); // Añade un elemento a un array al ultimo
console.log(cosas);

cosas.pop(); // Elimina el ultimo elemento de un array
console.log(cosas);

var bus = cosas.indexOf(3);
if (bus > -1) {
  cosas.splice(bus, 1);
}

cosas = cosas.join();

console.log(cosas);
*/

// de cadena a array

// var cad = "txt1, txt2, txt3";
// var arr = cad.split(", ");

// console.log(arr);

// Ordenar array
var x = [2, 34, 1, 5, 45, 12];
// x.sort(); // Orden alfavetico
// x.reverse(); // Dar la vuelta array

// For In

// for (element in x) {
//   console.log(element);
// }

// Busquedas en un array
// let n = x.find((val) => val === 34);
// let n = x.findIndex((val) => val === 34);
// let n = x.some((val) => val >= 10);

// console.log(n);

// let val;
// let arr = [];

// for (var i = 0; i < 6; ) {
//   val = parseInt(prompt("Ingresa un numero", 0));
//   if (isNaN(val)) {
//     val = parseInt(prompt("Ingresa un numero", 0));
//   } else {
//     arr.push(val);
//     i++;
//   }
// }

// document.write("<h1>Contenido del array</h1>");
// document.write("<ul>");
// arr.forEach((n, index) => {
//   document.write(`
//   <li>${index} - ${n} </li>
//   `);
// });
// document.write("</ul>");

// console.log(arr);
