let puissance4 = [];
let nbrColonne = 7;
let nbrLigne = 6;

let initialiserTableauMultiDim = function (nbrLigne, nbrColonne, el) {
  let tabMulti = [];
  for (let i = 0; i < nbrLigne; i++) {
    let ligne = [];
    for (let i = 0; i < nbrColonne; i++) {
      ligne.push(el);
    }
    tabMulti.push(ligne);
  }
  return tabMulti;
};

puissance4 = initialiserTableauMultiDim(nbrLigne, nbrColonne,0);

console.log(puissance4);
