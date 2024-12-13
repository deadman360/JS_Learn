function juntaArrays(...arrays) {
  return [].concat(...arrays);
}
let array1 = [1, 2, 3];
let array2 = [1, 2, 3];
let array3 = [1, 2, 3];
console.log(juntaArrays(array1, array2, array3));

//ex2
let valores = [1, 2, 3, 4, 5];
soma = valores.reduce((acumulador, elem) => (acumulador += elem), 0);
console.log(soma);

//ex3
const coresLista1 = ["Vermelho", "Verde", "Azul", "Amarelo", "Vermelho"];
const coresLista2 = ["Laranja", "Verde", "Roxo", "Azul"];
let listaUnida = [...new Set([...coresLista1, ...coresLista2])];
console.log(listaUnida);
//ex4
function separaPares(array) {
  return array.filter(function (elem) {
    return elem % 2 == 1;
  });
}
console.log(separaPares(valores));

//ex5
function filtraMaior3Menor5(array) {
  return array.filter(function (elem) {
    return elem % 3 == 0 && elem > 5;
  });
}
let valores2 = [1, 2, 3, 4, 5, 30, 40, 60, 48, 32];
console.log(filtraMaior3Menor5(valores2));

//ex6
function sumArray(array) {
  let acc = 0;
  for (elem of array) {
    acc += elem;
  }
  return acc;
}

console.log(sumArray(valores2));
console.log(valores2.reduce((acumulador, elem) => (acumulador += elem), 0));
