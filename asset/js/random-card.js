// variables

var colors = ["carreau", "coeur", "trefle", "pique"];
var deck = [
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  "V",
  "D",
  "R",
  "A",
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  "V",
  "D",
  "R",
  "A",
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  "V",
  "D",
  "R",
  "A",
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  "V",
  "D",
  "R",
  "A",
];
var mainDuJoueur;
var mainDuDealer;
// variables

// function

function piocherCarteAuHasard(deck) {
  var randomIndex = Math.floor(deck.length * Math.random());
  return deck[randomIndex];
}

function startGame() {
  mainDuJoueur = [piocherCarteAuHasard(deck), piocherCarteAuHasard(deck)];
  mainDuDealer = [piocherCarteAuHasard(deck), piocherCarteAuHasard(deck)];
}

function valeurDeLaMain(main) {
  var sum = 0;
  for (var i = 0; i < main.length; i++) {
    if (main[i] === "A") {
      if (mainDuJoueur >= 10) {
        sum += 1;
      } else {
        sum += 11;
      }
    } else if (main[i] === "V" || main[i] === "D" || main[i] === "R") {
      sum += 10;
    } else {
      sum += main[i];
    }
  }
  return sum;
}

function tirer() {
  mainDuJoueur.push(piocherCarteAuHasard(deck));
  document.getElementById("carte-joueur").innerHTML = mainDuJoueur;
  document.getElementById("valeur-main-joueur").innerHTML = valeurDeLaMain(
    mainDuJoueur
  );
  if (valeurDeLaMain(mainDuJoueur) > 21) {
    console.log("perdu");
  }
}

randomValue = Math.floor(Math.random() * (51 - 1) + 1);
randomColors = Math.floor(Math.random() * (4 - 0) + 0);

// function

// console.log
// console.log(randomColors);
// console.log(randomValue);

// carte = `<img src="./asset/img/${deck[randomValue]}-${colors[randomColors]}.png" alt="">`;
// $(document).ready(function () {
//   $("#np").click(function () {
//     $("#carte-joueur").html(carte);
//   });
// });

// startGame();
// document.getElementById("carte-joueur").innerHTML = mainDuJoueur;
// document.getElementById("valeur-main-joueur").innerHTML = valeurDeLaMain(
//   mainDuJoueur
// );
// document.getElementById("carte-dealer").innerHTML = mainDuDealer;
// document.getElementById("valeur-main-dealer").innerHTML = valeurDeLaMain(
//   mainDuDealer
// );

// console.log
