//Hacer una funcion que reciba como parametro un array del 100, 200, 300, 2000, 3000, 10.000. 40.000 y debe filtrar cuales de esos empiezan por un numero impar y los pares que la sifra completa sea mayor a 4 digitos
//Hacer una funcion que reciba como parametro un array aleatorio con 10 aleatorios del 1 al 20 y debe mapear (sumar) un numero aleatorio

//a tomar en cuenta: Debe ser Arrow Function, debe ser descriptivas las variables y deben estar en ingles

const arrayFilter = [100, 200, 300, 2000, 3000, 10000, 40000, 100000];

const converterString = (arrayfil) =>
  arrayfil.map((item) => {
    return item.toString();
  });

const stringArray = converterString(arrayFilter);

const first = (strArray) => {
  result = strArray.filter((arrfil) => arrfil[0] % 2 !== 0);
  return result;
};

const firstdigit = first(stringArray);

const four = (strArray) => {
  result = strArray.filter((arrfil) => arrfil.length > 4);
  return result;
};

const fourdigits = four(stringArray);

const solution = (first, four) => {
  const result = first.concat(four);
  return result;
};

const finalArray = solution(firstdigit, fourdigits);
const converternumber = (finalArr) =>
  finalArr.map((item) => {
    return parseInt(item);
  });

console.log(converternumber(finalArray));

let arrayMap = Array.from({ length: 20 }, () =>
  Math.max(Math.floor(Math.random() * 21), 1)
);
const addArray = (arrMap) => {
  const result = arrMap.map(
    (item) => item + Math.max(Math.floor(Math.random() * 101), 1)
  );
  return result;
};

console.log(addArray(arrayMap));
