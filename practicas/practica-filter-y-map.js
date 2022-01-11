//función que reciba como parametro un array y que filtre los numeros del 1 al 20 ,filtrar numeros que son impares del 1 al 20 y retornarlos en la funcion

// funcion que reciba como parametros un array y se mapea, que devuelva 2 array una que diga cual es par y cual es impar

const arrayNumber = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const newValueArrayMap = (array) =>
    array.map((item) => {
        return item.toString();
    });

let stringArray = newValueArrayMap(arrayNumber);

const oddNumberFilterArrayValue = (array) => {
    const oddResultFilter = array.filter((item) => item % 2 !== 0);
    return oddResultFilter;
};

const evenNumberFilterArrayValue = (array) => {
    const evenResultFilter = array.filter((item) => item % 2 === 0);
    return evenResultFilter;
};

console.log(oddNumberFilterArrayValue(arrayNumber));

let oddProofValueArray = oddNumberFilterArrayValue(stringArray);
let evenProofValueArray = evenNumberFilterArrayValue(stringArray);

const oddNumberMapArray = (strArray) => {
    const result = strArray.map((item) => item + " Es impar");
    return result;
};

const evenNumberMapArray = (strArray) => {
    const result = strArray.map((item) => item + " Es par");
    return result;
};

const oddMapArrayNumber = oddNumberMapArray(oddProofValueArray);
const evenMapArrayNumber = evenNumberMapArray(evenProofValueArray);


console.log(oddMapArrayNumber, evenMapArrayNumber);


/*CONST: Es una constante la cual NO cambiara su valor en ningún momento en el futuro.

  VAR: Es una variable que SI puede cambiar su valor y su scope es local.

  LET: Es una variable que también podra cambiar su valor, pero solo vivirá(Funcionara) en el bloque donde fue declarada.*/

/*- .tostring se utiliza para convertir numeros a una cadena de texto
  - StrArray es un parametro
  - !== es diferente a
  - === es igual a
  - parametro Declara la funcion
  - Argumento Invoca la funcion
  - CallBack es una llamada de vuelta, es una funcion que recibe como argumento otra funcion que la ejecuta
  - Error de tipeo es cuando se escribe mal alguna palabra
  -concat es metodo que une dos array
  */
