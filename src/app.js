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
  document.getElementById("button").onclick = generateExcuse;
  //   //write your code here
  //   // const excuseRandom = Math.floor(Math.random() * 7);
  //   // for (let o = 0; o < who.length; o++)
  //   //   for (let a = 0; a < what.length; a++)
  //   //     for (let e = 0; e < when.length; e++)
  //   let whoRandom = Math.floor(Math.random() * who.length);
  //   let whatRandom = Math.floor(Math.random() * what.length);
  //   let whenRandom = Math.floor(Math.random() * when.length);
  //   let excuses = who[whoRandom] + " " + what[whatRandom] + " " + when[whenRandom];
  //   console.log(excuses);
  //   // document.getElementById("excuse").innerHTML = excuses;
  //   document.getElementById("button").onclick = excuses;
};

function generateExcuse() {
  let whoRandom = Math.floor(Math.random() * who.length);
  let whatRandom = Math.floor(Math.random() * what.length);
  let whenRandom = Math.floor(Math.random() * when.length);
  let excuses =
    who[whoRandom] + " " + what[whatRandom] + " " + when[whenRandom];
  console.log(excuses);
  document.getElementById("h1").innerHTML = excuses;
  // document.getElementById("button").innerHTML = excuses;
}
