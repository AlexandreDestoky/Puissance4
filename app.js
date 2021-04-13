let puissance4 = [];
let nbrColonne = 7;
let nbrLigne = 6;

/**
 * Permet d'initialiser un tableau Multidimensionnel
 * @param {Number} nbrLigne 
 * @param {Number} nbrColonne 
 * @param {*} el 
 * @returns 
 */
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
