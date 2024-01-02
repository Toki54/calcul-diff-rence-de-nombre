function calculerDifferences() {
    // Boucle à travers les lignes du tableau
    for (var index = 1; index <= 7; index++) {
        var serie1 = parseInt(document.getElementById('serie1_' + index).value);
        var serie2 = parseInt(document.getElementById('serie2_' + index).value);

        if (!isNaN(serie1) && !isNaN(serie2)) {
            var difference = serie2 - serie1;

            var resultatSpan = document.getElementById('resultat_' + index);
            resultatSpan.innerHTML = 'Différence: ' + (difference > 0 ? '+' : '') + difference;
        } else {
            alert('Veuillez entrer des nombres valides pour chaque série.');
            return; // Arrête la fonction si l'entrée n'est pas valide
        }
    }
}
