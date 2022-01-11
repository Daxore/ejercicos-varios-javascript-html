/*Estructuracion:
    -Crear funcion
    -array de numeros negativos y positivos
    -imprimir por cpnsola
Tarea Hugo
//*Hacer dos funciones que reciban como parametro un arreglo con numeros aleatorios (minimo 10 numeros), la primera funcion debe //retornar la suma de todos los numeros pares y la segunda debe retornar la resta de todos los numeros impares, //finalmente, se debe multiplicar el resultado de ambas funciones*/

   
   let randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
   

   console.log(randomNumbers)
   
   const sumOfEvenNumbers = (randomNumbers) => {
     const filteringEvenNumbers = randomNumbers.filter((valor) => valor % 2 === 0);
     let result = filteringEvenNumbers.reduce((a, b) => a + b);
     console.log(`El resultado de la funcion es: ${result}`);
     return result;
   };
   let sumResult = sumOfEvenNumbers(randomNumbers);
   
   const SubtractionOfOddNumbers = (randomNumbers) => {
     const filteringOddNumbers = randomNumbers.filter((valor) => valor % 2 !== 0);
     let result = filteringOddNumbers.reduce((a, b) => a - b);
     console.log(`El resultado de la funcion es: ${result}`);
     return result;
   };
   let restResult = SubtractionOfOddNumbers(randomNumbers);
   
   console.log(
     "El resultado de la multiplicacion de los valores resta y suma son: " +
       sumResult * restResult
   );