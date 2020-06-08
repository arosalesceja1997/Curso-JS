"use strict";

// Si existe o es compatible el localstorage
// if (typeof Storage !== "undefined") {
//   document.querySelector("#txt-1").value = localStorage.getItem("data");
// } else {
//   console.log("No esta siponible");
// }

// // Guardar datos en localstorage
// localStorage.setItem("data", "Anthony");

// // Guardar un objeto
// let usuario = {
//   nombre: "Anthony Rosales Ceja",
//   email: "arosalesceja1997@gmail.com",
//   edad: 25,
// };

// let user = localStorage.getItem("usuario");

// if (user) {
//   console.log(`Existe el usuario ${JSON.parse(user).nombre} - ${user}`);
// } else {
//   localStorage.setItem("usuario", JSON.stringify(usuario));
// }

let peliculaStorage = localStorage.getItem("pelicula");
let pelicula = [];

if (peliculaStorage) {
  pelicula = JSON.parse(peliculaStorage);
}
