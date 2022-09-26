let who = ["the dog", "my granma", "his turtle", "my bird"];

let what = ["eat", "pissed", "crushed", "broked"];

let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying",
];

function onLoad() {
  // const excuseRandom = Math.floor(Math.random() * 7);
  for (let o = 0; o < who.length; o++) {
    o = Math.floor(Math.random() * who.length);
    for (let a = 0; a < what.length; a++) {
      a = Math.floor(Math.random() * what.length);
      for (let e = 0; e < when.length; e++) {
        e = Math.floor(Math.random() * when.length);
        let excuses = [who[o] + " " + what[a] + " " + when[e]];
        return console.log(excuses);
      }
    }
  }
}

onLoad();
function generateExcuse() {
  let whoRandom = Math.floor(Math.random() * who.length);
  let whatRandom = Math.floor(Math.random() * what.length);
  let whenRandom = Math.floor(Math.random() * when.length);
  let excuses =
    who[whoRandom] + " " + what[whatRandom] + " " + when[whenRandom];
  console.log(excuses);
  // document.getElementById("excuse").innerHTML = excuses;
  document.getElementById("button").onclick = excuses;
}
