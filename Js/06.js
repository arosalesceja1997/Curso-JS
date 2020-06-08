// Dom ejemplo

// var x = document.getElementById("box");
// console.log(x);

// x.innerHTML += "Texto";
// x.style.background = "red";
// x.style.padding = "25px 25px";
// x.className = "Hola";

// function color(color = "") {
//   x.style.background = color !== "" ? color : "Blue";
// }

// var y = document.querySelector(""); // # id . Class y nombre normal

// BOM Brouser
// console.log(window.innerHeight);
// console.log(window.innerWidth);

// console.log(screen.width);
// console.log(screen.height);

// console.log(window.location);
// console.log(window.location.href);

// function ren(url = "https://arosalesceja1997.github.io/WebDesignModule/") {
//   // window.location.href = url;
//   window.open(url, "", "width=400px, height=400px");
// }

// Eventos en mi pagina web

// function changecolor() {
//   let x = btn.style.background;
//   if (x.includes("green")) {
//     btn.style.background = "red";
//   } else {
//     btn.style.background = "green";
//   }
//   return true;
// }

// let btn = document.querySelector("#btn-1");

// // Onclick
// btn.addEventListener("onclick", function () {
//   changecolor();
// });

// // Mouseover
// btn.addEventListener("mouseover", () => {
//   btn.style.background = "blue";
// });

// // Mouseout
// btn.addEventListener("mouseout", () => {
//   btn.style.background = "white";
// });

// // Eventos para la caja de texto
// var txt = document.getElementById("txt-1");

// // Focus
// txt.addEventListener("focus", () => {
//   console.log("Dentro del input");
// });

// // Blur
// txt.addEventListener("blur", () => {
//   console.log("Estas fuera");
// });

// // Keydown
// txt.addEventListener("keydown", (x) => {
//   // console.log(x);
//   // console.log(String.fromCharCode(x.keyCode));
// });

// // Keypress pulsando una tecla
// txt.addEventListener("keypress", (x) => {
//   // console.log(x);
//   // console.log(String.fromCharCode(x.keyCode));
// });

// // Keyup pulsando una tecla
// txt.addEventListener("keypress", (x) => {
//   console.log(x);
//   console.log(String.fromCharCode(x.keyCode));
// });

window.addEventListener("load", () => {
  // var x1 = setInterval(function (x) {
  //   console.log("Entro");
  //   console.log(x);
  // }, 1000);

  function intervalo() {
    var x1 = setInterval(function (x) {
      console.log("Entro");
      console.log(x);
    }, 1000);
    return x1;
  }

  var x = intervalo();
  var ban = true;

  var j = document.getElementById("btn-1");
  j.addEventListener("click", () => {
    if (ban) {
      ban = false;
      clearInterval(x);
    } else {
      ban = true;
      x = intervalo();
    }
    console.log(ban);
  });
});
