$(document).ready(function () {
    var joueur = 0;
    var banque = 0;

    function carteJoueur() {
        var min = 1;
        var max = 10;
        joueur = joueur + (Math.floor(Math.random() * (max - min)) + min);
        console.log(joueur)
    }

    function carteBanque() {
        var min = 1;
        var max = 10;
        banque = banque + (Math.floor(Math.random() * (max - min)) + min);
        console.log(banque)
    }

    $("#carte").click(function () {
        carteJoueur();
        $("#joueur").html(joueur);
        carteBanque();
        $("#banque").html(banque);
    });
})
