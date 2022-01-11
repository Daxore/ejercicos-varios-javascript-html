// Hacer un función que reciba como parámetro un array
// Este array debe tener cuatro animales: cardenal, pato, gato y leopardo
//Filtrar los animales que son de cuatro patas




const animals = [
    {name:"Cardenal", legs:"Dos", caracter:"Vuela"},
    {name:"Leopardo", legs:"Cuatro", caracter:"Corre"},
    {name:"Pato", legs:"Dos", caracter:"Vuela"},
    {name:"Gato", legs:"Cuatro", caracter:"Corre"}
]



const animalFilter = arrayAnimals =>{
const resultFilter = arrayAnimals.filter(item => item.legs === "Cuatro")
return resultFilter
}

console.log(animalFilter(animals))



