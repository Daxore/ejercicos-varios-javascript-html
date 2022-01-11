// Ejercicio para el jueves... hacer en arrow function todo en ingles

// Realizar un array que contenga 10 nombres diferentes de animales.

const arrayAnimals = [
  "perro",
  "raton",
  "gallo",
  "elefante",
  "tigre",
  "oso",
  "aguila",
  "caballo",
  "gato",
  "mono",
];

// Hacer una funcion que reciba como parametro un array que contenga 10 nombres de animales diferentes y se va a filtrar con metodo filter los nombres de animales que tienen mas de 4 letras

const animalsFilter = (arrayAnimals) => {
  const resultadoAnimalFilter = arrayAnimals.filter((item) => item.length >= 5);
  return resultadoAnimalFilter;
};
console.log(animalsFilter(arrayAnimals));

// Hacer una funcion que reciba el mismo array de animales como parametro y usar el metodo map y a los que tengan mas de 4 letras se le coloca un string que diga que esta en el zoologico !
let newArray =[];

const animalsMap = (arrayAnimals) => {
  const resultadoAnimalMap = arrayAnimals.map((item, index, array) => {
    if (item.length >= 5) { 
      newArray.push(array[index] + " está en el Zoologico");
      return newArray;
    }
    
  })
  return newArray;
};

console.log(animalsMap(arrayAnimals));

