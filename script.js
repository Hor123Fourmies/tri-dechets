var boutPlas = document.getElementById('boutPlas');
var canetteJus = document.getElementById('canette');
var conserve = document.getElementById('conserve');
var restesRepas = document.getElementById('restesRepas');
var packJusFruits = document.getElementById('packJusFruits');
var packLait = document.getElementById('packLait');
var potYaourt = document.getElementById('potYaourt');
var gelDouche = document.getElementById('gelDouche');
var produitNettoyant = document.getElementById('produitNettoyant');
var bouteilleVin = document.getElementById('bouteilleVin');
var bouteilleBiere = document.getElementById('bouteilleBiere');
var potConfiture = document.getElementById('potConfiture');
var bocal = document.getElementById('bocal');
var journaux = document.getElementById('journaux');
var magazines = document.getElementById('magazines');

var dechets = [boutPlas, canetteJus, conserve, restesRepas, packJusFruits, packLait, potYaourt,
            gelDouche, bouteilleVin, bouteilleBiere, potConfiture, bocal, journaux, magazines];
var dechetAleatoire;

function dechetSuivant() {

    var dechet = Math.floor(Math.random()*dechets.length);
    dechetAleatoire = dechets[dechet];
    dechetAleatoire.style.display="block";
}

var boutonSuivant = document.getElementById('boutonSuivant');
boutonSuivant.addEventListener('click', function () {
    dechetSuivant();
    divTexte.innerText="";
    divTexteJaune.innerText="";
    divTexteVert.innerText="";
    divTexteBleu.innerText="";
    divTexteMarron.innerText="";
});

var divTexte = document.getElementById('divTexte');
var divTexteJaune = document.getElementById('divTexteJaune');
var divTexteVert = document.getElementById('divTexteVert');
var divTexteBleu = document.getElementById('divTexteBleu');
var divTexteMarron = document.getElementById('divTexteMarron');

var divPoints = document.getElementById('divPoints');
var compteur = 0;

function incrementer()
{
    compteur=compteur+1;
    divPoints.innerHTML=compteur+' point(s)';
}


var poubelleJaune = document.getElementById('poubelleJaune');
var poubelleVerte = document.getElementById('poubelleVerte');
var poubelleBleue = document.getElementById('poubelleBleue');
var poubelleMarron = document.getElementById('poubelleMarron');

var photoBravo = document.getElementById('bravo');
var boutonRejouer = document.getElementById('boutonRejouer');

poubelleJaune.addEventListener('click', function f() {
    console.log('poubelleJaune');
    switch (dechetAleatoire) {
        case boutPlas:
        case canetteJus:
        case conserve:
        case packJusFruits:
        case packLait:
        case gelDouche:
        case produitNettoyant:
            divTexte.innerHTML+="Bravo";
            dechetAleatoire.style.display="none";
            incrementer();
            break;
        case bouteilleVin:
        case bouteilleBiere:
        case potConfiture:
        case bocal:
            divTexteVert.innerHTML+="Erreur. Il faut choisir la poubelle VERTE";
            dechetAleatoire.style.display="none";
            break;
        case journaux:
        case magazines:
            divTexteBleu.innerHTML+="Erreur. Il faut choisir la poubelle BLEUE";
            dechetAleatoire.style.display="none";
            break;
        case restesRepas:
        case potYaourt:
            divTexteMarron.innerHTML+="Erreur. Il faut choisir la poubelle MARRON";
            dechetAleatoire.style.display="none";
            break;
        default:
            break;}

    if (compteur===5){
        photoBravo.style.display="block";
        boutonSuivant.style.visibility="hidden";
        boutonRejouer.style.display="block";
    }
});

poubelleVerte.addEventListener('click', function f() {
    switch (dechetAleatoire) {
        case bouteilleVin:
        case bouteilleBiere:
        case potConfiture:
        case bocal:
            divTexte.innerHTML+="Bravo";
            dechetAleatoire.style.display="none";
            incrementer();
            break;
        case boutPlas:
        case canetteJus:
        case conserve:
        case packJusFruits:
        case packLait:
        case gelDouche:
        case produitNettoyant:
            divTexteJaune.innerHTML+="Erreur. Il faut choisir la poubelle JAUNE";
            dechetAleatoire.style.display="none";
            break;
        case journaux:
        case magazines:
            divTexteBleu.innerHTML+="Erreur. Il faut choisir la poubelle BLEUE";
            dechetAleatoire.style.display="none";
            break;
        case restesRepas:
        case potYaourt:
            divTexteMarron.innerHTML+="Erreur. Il faut choisir la poubelle MARRON";
            dechetAleatoire.style.display="none";
            break;
        default:
            break;
    }
    if (compteur===5){
        photoBravo.style.display="block";
        boutonSuivant.style.visibility="hidden";
        boutonRejouer.style.display="block";
    }
});

poubelleBleue.addEventListener('click', function f() {
    switch (dechetAleatoire) {
        case journaux:
        case magazines:
            divTexte.innerHTML+="Bravo";
            dechetAleatoire.style.display="none";
            incrementer();
            break;
        case restesRepas:
        case potYaourt:
            divTexteMarron.innerHTML+="Erreur. Il faut choisir la poubelle MARRON";
            dechetAleatoire.style.display="none";
            break;
        case boutPlas:
        case canetteJus:
        case conserve:
        case packJusFruits:
        case packLait:
        case gelDouche:
        case produitNettoyant:
            divTexteJaune.innerHTML+="Erreur. Il faut choisir la poubelle JAUNE";
            dechetAleatoire.style.display="none";
            break;
        case bouteilleVin:
        case bouteilleBiere:
        case potConfiture:
        case bocal:
            divTexteVert.innerHTML+="Erreur. Il faut choisir la poubelle VERTE";
            dechetAleatoire.style.display="none";
            break;
        default:
            break;
    }
    if (compteur===5){
        photoBravo.style.display="block";
        boutonSuivant.style.visibility="hidden";
        boutonRejouer.style.display="block";
    }
});


poubelleMarron.addEventListener('click', function f() {
    switch (dechetAleatoire) {
        case restesRepas:
        case potYaourt:
            divTexte.innerHTML+="Bravo";
            dechetAleatoire.style.display="none";
            incrementer();
            break;
        case boutPlas:
        case canetteJus:
        case conserve:
        case packJusFruits:
        case packLait:
        case gelDouche:
        case produitNettoyant:
            divTexteJaune.innerHTML+="Erreur. Il faut choisir la poubelle JAUNE";
            dechetAleatoire.style.display="none";
            break;
        case bouteilleVin:
        case bouteilleBiere:
        case potConfiture:
        case bocal:
            divTexteVert.innerHTML="Erreur. Il faut choisir la poubelle VERTE";
            dechetAleatoire.style.display="none";
            break;
        case journaux:
        case magazines:
            divTexteBleu.innerHTML+="Erreur. Il faut choisir la poubelle BLEUE";
            dechetAleatoire.style.display="none";
            break;
        default:
            break;
    }
    if (compteur===5){
        photoBravo.style.display="block";
        boutonSuivant.style.visibility="hidden";
        boutonRejouer.style.display="block";
    }
});

boutonRejouer.addEventListener('click', function () {
   boutonSuivant.style.visibility="visible";
   divPoints.innerHTML="";
   compteur=0;
   photoBravo.style.display="none";
   boutonRejouer.style.display="none";
   divTexte.innerText="";
});