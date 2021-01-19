$(document).ready(function () {
    var joueur = 0;
    var min = 1;
    var max = 10;
    var banque = 0;

    function carteJoueur() {
        joueur = joueur + (Math.floor(Math.random() * (max - min)) + min);
        console.log(joueur)
    }

    function carteBanque() {
        banque = banque + (Math.floor(Math.random() * (max - min)) + min);
        console.log(banque)
    }

    function joueurWin() {

    }

    function banqueWin() {

    }

    // Pour que la banque tire une nouvelle carte avec un certain délai
    // $("#show").click(function () {
    //     $("p").show(3000, function () {
    //         console.log("Animation terminée !");
    //     })
    // });

    $("#carte").click(function () {
        carteBanque();
        carteJoueur();
        $("#banque").html(banque);
        $("#joueur").html(joueur);
    });

    $("#passer").click(function () {
        carteBanque();
        $("#banque").html(banque);
    });
})


/*
1- si le joueur ateint 21 et que la banque !== 21 ( le joueur gagne)
2- si la banque ateint 21 et que le joueur !== 21 (la banque gagne)


3- si le joueur > 21 (la banque gagne)
4- si le la banque > 21 (le joueur gagne)
*/