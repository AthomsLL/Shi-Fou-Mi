/* VARIABLES */
let totalBot = document.getElementById("total-bot");
let totalUtilisateur = document.getElementById("total-utilisateur");
let scoreBot = 0;
let scoreUtilisateur = 0;
totalBot.innerHTML = scoreBot;
totalUtilisateur.innerHTML = scoreUtilisateur;

const choixBotImg = document.getElementById("choix-bot-img");
const btnPierre = document.getElementById("btn-pierre");
const btnFeuille = document.getElementById("btn-feuille");
const btnCiseaux = document.getElementById("btn-ciseaux");
const btnReset = document.getElementById("btn-reset");

let blocResultat = document.getElementById("bloc-resultat");
let resultat = document.getElementById("resultat");

/* TABLEAU CHOIX DU BOT + CHOIX ALEATOIRE */
const tabChoixBot = [
    "Pierre",
    "Feuille",
    "Ciseaux"
];

let choixBotAleatoire = tabChoixBot[Math.floor(Math.random() * tabChoixBot.length)];

/* FONCTIONS */
btnPierre.addEventListener("click", function(e) {
    btnFeuille.style.display = "none";
    btnCiseaux.style.display = "none";

    if(choixBotAleatoire == "Pierre") {
        choixBotImg.innerHTML = "<img src='img/pierre.png' alt='Signe de la pierre'>";
        resultat.innerHTML = "Match Nul !"
    }
    else if(choixBotAleatoire == "Feuille") {
        choixBotImg.innerHTML = "<img src='img/feuille.png' alt='Signe de la feuille'>";
        resultat.innerHTML = "C'est perdu !"
        resultat.style.color = "red";
        scoreBot++;
        totalBot.innerHTML = scoreBot;
    }
    else {
        choixBotImg.innerHTML = "<img src='img/ciseaux.png' alt='Signe des ciseaux'>";
        resultat.innerHTML = "C'est gagné !"
        resultat.style.color = "green";
        scoreUtilisateur ++;
        totalUtilisateur.innerHTML = scoreUtilisateur;
    }

    blocResultat.style.display = "block";
});

btnFeuille.addEventListener("click", function(e) {
    btnPierre.style.display = "none";
    btnCiseaux.style.display = "none";

    if(choixBotAleatoire == "Feuille") {
        choixBotImg.innerHTML = "<img src='img/feuille.png' alt='Signe de la feuille'>";
        resultat.innerHTML = "Match Nul !"
    }
    else if(choixBotAleatoire == "Ciseaux") {
        choixBotImg.innerHTML = "<img src='img/ciseaux.png' alt='Signe des ciseaux'>";
        resultat.innerHTML = "C'est perdu !"
        resultat.style.color = "red";
        scoreBot++;
        totalBot.innerHTML = scoreBot;
    }
    else {
        choixBotImg.innerHTML = "<img src='img/pierre.png' alt='Signe de la pierre'>";
        resultat.innerHTML = "C'est gagné !"
        resultat.style.color = "green";
        scoreUtilisateur++;
        totalUtilisateur.innerHTML = scoreUtilisateur;
    }

    blocResultat.style.display = "block";
});

btnCiseaux.addEventListener("click", function(e) {
    btnPierre.style.display = "none";
    btnFeuille.style.display = "none";

    if(choixBotAleatoire == "Ciseaux") {
        choixBotImg.innerHTML = "<img src='img/ciseaux.png' alt='Signe des ciseaux'>";
        resultat.innerHTML = "Match Nul !"
    }
    else if(choixBotAleatoire == "Pierre") {
        choixBotImg.innerHTML = "<img src='img/pierre.png' alt='Signe de la pierre'>";
        resultat.innerHTML = "C'est perdu !"
        resultat.style.color = "red";
        scoreBot++;
        totalBot.innerHTML = scoreBot;
    }
    else {
        choixBotImg.innerHTML = "<img src='img/feuille.png' alt='Signe de la feuille'>";
        resultat.innerHTML = "C'est gagné !"
        resultat.style.color = "green";
        scoreUtilisateur++;
        totalUtilisateur.innerHTML = scoreUtilisateur;
    }

    blocResultat.style.display = "block";
});

btnReset.addEventListener("click", function(e) {
    choixBotImg.innerHTML = "";
    btnPierre.style.display = "inline-block";
    btnFeuille.style.display = "inline-block";
    btnCiseaux.style.display = "inline-block";
    resultat.innerHTML = "";
    resultat.style.color = "";
    blocResultat.style.display = "";
    choixBotAleatoire = tabChoixBot[Math.floor(Math.random() * tabChoixBot.length)];
});