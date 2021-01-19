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



    $("#carte").click(function () {
        carteBanque();
        carteJoueur();
        $("#banque").html(banque);
        $("#joueur").html(joueur);
        if ( joueur === 21 && banque !== 21 ){
            $("#result").html("GG c'est win");
            $("#carte").addClass("d-none");
            $("#passer").addClass("d-none");
        }else if( banque === 21){
            $("#result").html("RIP t'as perdu");
            $("#carte").addClass("d-none");
            $("#passer").addClass("d-none");
        }else if (joueur > 21){
            $("#result").html("RIP t'as perdu");
            $("#carte").addClass("d-none");
            $("#passer").addClass("d-none");
        }else if (banque > 21){
            $("#result").html("GG c'est win");
            $("#carte").addClass("d-none");
            $("#passer").addClass("d-none");
        }
    });

    $("#passer").click(function () {
         if(joueur < banque && banque < 21){
            $("#result").html("RIP t'as perdu");
            $("#carte").addClass("d-none");
            $("#passer").addClass("d-none");
        }else if (banque <= 18){
        carteBanque();
        $("#banque").html(banque);
            if(banque > joueur){
                $("#result").html("RIP t'as perdu");
                $("#carte").addClass("d-none");
                $("#passer").addClass("d-none");
            }else if(joueur > banque){
                $("#result").html("GG c'est win");
                $("#carte").addClass("d-none");
                $("#passer").addClass("d-none");
            }
        }else if ( joueur === 21 && banque !== 21 ){
            $("#result").html("GG c'est win");
            $("#carte").addClass("d-none");
            $("#passer").addClass("d-none");
        }else if( banque === 21){
            $("#result").html("RIP t'as perdu");
            $("#carte").addClass("d-none");
            $("#passer").addClass("d-none");
        }else if (joueur > 21){
            $("#result").html("RIP t'as perdu");
            $("#carte").addClass("d-none");
            $("#passer").addClass("d-none");
        }else if (banque > 21){
            $("#result").html("GG c'est win");
            $("#carte").addClass("d-none");
            $("#passer").addClass("d-none");
        }
    });
})


/*
1- si le joueur ateint 21 et que la banque !== 21 ( le joueur gagne)
2- si la banque ateint 21 et que le joueur !== 21 (la banque gagne)


3- si le joueur > 21 (la banque gagne)
4- si le la banque > 21 (le joueur gagne)
*/