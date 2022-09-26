/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["the dog", "my granma", "his turtle", "my bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  //Evento on click al boton
  document.getElementById("button").onclick = generateExcuse;
};

//Funcion de excusas
function generateExcuse() {
  //Randomiza los indices los arrays
  let whoRandom = Math.floor(Math.random() * who.length);
  let whatRandom = Math.floor(Math.random() * what.length);
  let whenRandom = Math.floor(Math.random() * when.length);
  let excuses =
    who[whoRandom] + " " + what[whatRandom] + " " + when[whenRandom];
  console.log(excuses);
  //
  document.getElementById("h1").innerHTML = excuses;
}
