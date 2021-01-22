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

// function
