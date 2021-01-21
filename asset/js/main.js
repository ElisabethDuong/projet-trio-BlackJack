$(document).ready(function () {
  var joueur = 0;
  var min = 1;
  var max = 10;
  var banque = 0;
  var mainDuJoueur = [];
  var mainDuDealer = [];
  var click = 0;
  var visuCarteJoueur;
  var visuCarteBanque;

  function carteJoueur() {
    var randomCard = piocherCarteAuHasard(deck);
    mainDuJoueur.push(randomCard);
    joueur = valeurDeLaMain(mainDuJoueur);
    console.log("joueur = " + joueur);
    console.log("main du joueur = " + mainDuJoueur);
    visuCarteJoueur = `<img src="./asset/img/${mainDuJoueur}-pique.png" alt="" />`;
    $("#visu-carte-joueur").html(visuCarteJoueur);
  }

  function carteBanque() {
    var randomCard = piocherCarteAuHasard(deck);
    mainDuDealer.push(randomCard);
    banque = valeurDeLaMain(mainDuDealer);
    console.log("dealer = " + banque);
    console.log("main du dealer = " + mainDuDealer);
    visuCarteBanque = `<img src="./asset/img/${mainDuDealer}-pique.png" alt="" />`;
    $("#visu-carte-banque").html(visuCarteBanque);
  }

  function gg() {
    $("#result").html("GG c'est win");
    $("#carte").addClass("d-none");
    $("#passer").addClass("d-none");
  }

  function rip() {
    $("#result").html("RIP t'as perdu");
    $("#carte").addClass("d-none");
    $("#passer").addClass("d-none");
  }

  function autoResult() {
    if (joueur > 21) {
      rip();
    } else {
    }
  }

  function manualResult() {
    if ((joueur === 21 && banque > 21) || banque < joueur) {
      gg();
    } else if (banque === 21) {
      rip();
    } else if (banque >= joueur && banque <= 21) {
      rip();
    } else if (joueur < 21 && joueur > banque) {
      gg();
    } else if (banque > 21 && joueur < banque) {
      gg();
    }
  }

  // Pour que la banque tire une nouvelle carte avec un certain délai
  // $("#show").click(function () {
  //     $("p").show(3000, function () {
  //         console.log("Animation terminée !");
  //     })
  // });

  $("#carte").click(function () {
    if (joueur === 21) {
      if (confirm("Es-tu sûr(e) de vouloir reprendre une carte ??")) {
        for (var i = 0; i < 2; i++) {
          if (click === 0) {
            carteBanque();
            $("#banque").html(banque);
            carteJoueur();
            $("#joueur").html(joueur);
            autoResult();
            click++;
            return;
          } else if (click > 0) {
            carteJoueur();
            $("#joueur").html(joueur);
            autoResult();
            click++;
            return;
          } else {
          }
        }
      } else {
        return;
      }
    } else {
      for (var i = 0; i < 2; i++) {
        if (click === 0) {
          carteBanque();
          $("#banque").html(banque);
          carteJoueur();
          $("#joueur").html(joueur);
          autoResult();
          click++;
          refresh++;
          return;
        } else if (click > 0) {
          carteJoueur();
          $("#joueur").html(joueur);
          autoResult();
          click++;
          refresh++;
          return;
        }
      }
    }
  });

  $("#passer").click(function () {
    $("#banque").html(banque);
    while (banque < 17) {
      carteBanque();
      $("#banque").html(banque);
      autoResult();
    }
    manualResult();
  });

  var refresh = 0;
  $("#refresh").on("click", function () {
    location.reload();
  });
});
