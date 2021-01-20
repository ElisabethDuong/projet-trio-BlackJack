$(document).ready(function () {
    var joueur = 0;
    var min = 1;
    var max = 10;
    var banque = 0;

    function carteJoueur() {
        joueur = joueur + (Math.floor(Math.random() * (max - min)) + min);
        console.log(joueur);
    }

    function carteBanque() {
        banque = banque + (Math.floor(Math.random() * (max - min)) + min);
        console.log(banque);
    }

    function gg() {
        $("#result").html("GG c'est win");
        $("#carte").addClass("d-none");
        $("#passer").addClass("d-none");
        $("#refresh").removeClass("d-none");
    }

    function rip() {
        $("#result").html("RIP t'as perdu");
        $("#carte").addClass("d-none");
        $("#passer").addClass("d-none");
        $("#refresh").removeClass("d-none");
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
    var click = 0;

    $("#carte").click(function () {
        $("#refresh").addClass("d-none");
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
        $("#refresh").removeClass("d-none");

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

/*
1- si le joueur ateint 21 et que la banque !== 21 ( le joueur gagne)
2- si la banque ateint 21 et que le joueur !== 21 (la banque gagne)


3- si le joueur > 21 (la banque gagne)
4- si le la banque > 21 (le joueur gagne)
*/
