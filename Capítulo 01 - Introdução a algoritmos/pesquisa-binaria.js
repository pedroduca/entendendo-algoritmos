const pesquisaBinaria = (lista, item) => {
  let baixo = 0;
  let alto = lista.length - 1;
  let meio = Math.floor((baixo + alto) / 2);

  while (lista[meio] !== item && baixo < alto) {
    let chute = lista[meio];
    if (item < chute) {
      alto = meio - 1;
    } else {
      baixo = meio + 1;
    }
    meio = Math.floor((baixo + alto) / 2);
  }
  return lista[meio] === item ? meio : -1;
};
const minhaLista = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25];
console.log(pesquisaBinaria(minhaLista, 15));
