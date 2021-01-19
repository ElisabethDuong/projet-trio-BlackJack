var joueur = 0;
var min = 16;
var max = 21;
var banque = Math.floor(Math.random() * (max - min) - min);

function draw() {
    min = 1;
    max = 10;
    joueur = joueur + (Math.floor(Math.random() * (max - min)) + min);
    console.log(joueur)
}

draw();