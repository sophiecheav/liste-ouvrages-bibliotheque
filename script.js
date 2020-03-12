class Livre {
  constructor(titre, auteur, annee) {
    this.titre = titre
    this.auteur = auteur
    this.annee = annee
  }
}

let livres = [
  new Livre('Le Dernier Voeu', 'Andrzej Sapkowski', '1993'),
  new Livre('L’Autre Moitié du Soleil', 'Chimamanda Ngozi Adichie', '2016'),
  new Livre('Les Jolies Choses', 'Virginie Despentes', '1998'),
];

function mettreAJourLaTable() {
  document.querySelector('.case-ouvrage').innerHTML = '';
  livres.forEach(function(ouvrage) {
    document.querySelector('.case-ouvrage').innerHTML += `<tr><td>${ouvrage.titre}</td><td>${ouvrage.auteur}</td><td>${ouvrage.annee}</td</tr>`;
  });
}

mettreAJourLaTable();

document.querySelector('.add-btn').addEventListener('click', function() {
  let nouveauLivre = new Livre (
    document.getElementById('titre').value,
    document.getElementById('auteur').value,
    document.getElementById('annee').value,
  );
  livres.push(nouveauLivre);
  mettreAJourLaTable();

  document.getElementById('titre').value = '';
  document.getElementById('auteur').value = '';
  document.getElementById('annee').value = '';
});

mettreAJourLaTable();

document.querySelector('.tri-titre').addEventListener('click', function() {
  livres.sort(function(ouvrageA, ouvrageB) {
    return ouvrageA.titre > ouvrageB.titre; // sort = on ne sait pas dans quel ordre il appelle les valeurs
  });
  mettreAJourLaTable();
});


document.querySelector('.tri-auteur').addEventListener('click', function() {
  livres.sort(function(ouvrageA, ouvrageB) {
    return ouvrageA.auteur > ouvrageB.auteur;
  });
  mettreAJourLaTable();
});

document.querySelector('.tri-annee').addEventListener('click', function() {
  livres.sort(function(ouvrageA, ouvrageB) {
    return ouvrageA.annee > ouvrageB.annee;
  });
  mettreAJourLaTable();
});

mettreAJourLaTable();
