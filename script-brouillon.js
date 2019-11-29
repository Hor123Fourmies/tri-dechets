var dechetsPoubelleJaune = ['bouteille en plastique', 'canettes', 'jus de fruits', 'lait', 'gel douche',
    'bain moussant', 'shampoing', 'lave-vitres', 'nettoyant',];

var dechetsPoubelleVerte = ['bouteille de vin', 'bouteille de bière', 'pot de confiture' ,'bocaux'];

var dechetsPoubelleBleue = ['journaux', 'magazines'];

var dechetsPoubelleMarron = ['restes de repas', 'pots de yaourts'];



var dechets=["bouteille d'eau en plastique", 'canette de soda', 'pack de jus de fruits', 'pack de lait',
    'gel douche', 'bain moussant', 'shampoing', 'produit lave-vitres', 'nettoyant ménager',
    'bouteille de vin', 'bouteille de bière', 'pot de confiture' ,'bocal de conservation','journaux', 'magazines',
    'restes de repas', 'pot de yaourts'];







/*
var dechetJauneNum = Math.floor(Math.random()*dechetsPoubelleJaune.length);
dechetJaunePhoto = dechetsPoubelleJaune[dechetJauneNum];
document.write(dechetJaunePhoto);

var dechetVertNum =  Math.floor(Math.random()*dechetsPoubelleVerte.length);
dechetVertPhoto = dechetsPoubelleVerte[dechetVertNum];
document.write(dechetVertPhoto);

var dechetBleuNum =  Math.floor(Math.random()*dechetsPoubelleBleue.length);
dechetBleuPhoto = dechetsPoubelleBleue[dechetBleuNum];
document.write(dechetBleuPhoto);

var dechetMarronNum =  Math.floor(Math.random()*dechetsPoubelleMarron.length);
dechetMarronPhoto = dechetsPoubelleMarron[dechetMarronNum];
document.write(dechetMarronPhoto);
*/



var poubelleJaune = document.getElementById('poubelleJaune');
var poubelleVerte = document.getElementById('poubelleVerte');

poubelleJaune.addEventListener('click', function f() {
    console.log('poubelleJaune');
    switch (dechetAleatoire) {
        case "bouteille d'eau en plastique":
        case 'canette de soda':
        case 'pack de jus de fruits':
        case 'pack de lait':
        case 'gel douche':
        case 'bain moussant':
        case 'shampoing':
        case 'produit lave-vitres':
        case 'nettoyant ménager':
            alert('bravo');
            break;

        case 'bouteille de vin':
        case 'bouteille de bière':
        case 'pot de confiture':
        case 'bocal de conservation':
        case 'journaux':
        case 'magazines':
        case 'restes de repas':
        case 'pot de yaourts':
            alert('erreur');
            break;
        default:
            break;
    }
    if(alert('bravo')){
        document.getElementById('blocDroit').innerHTML='A';
    }
});

poubelleVerte.addEventListener('click', function f() {
    switch (dechetAleatoire) {
        case "bouteille d'eau en plastique":
        case 'canette de soda':
        case 'pack de jus de fruits':
        case 'pack de lait':
        case 'gel douche':
        case 'bain moussant':
        case 'shampoing':
        case 'produit lave-vitres':
        case 'nettoyant ménager':
        case 'journaux':
        case 'magazines':
        case 'restes de repas':
        case 'pot de yaourts':
            alert('erreur');
            break;

        case 'bouteille de vin':
        case 'bouteille de bière':
        case 'pot de confiture':
        case 'bocal de conservation':
            alert('bravo');
            break;
        default:
            break;
    }

});
