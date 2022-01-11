/*Realizar una función que reciba como parámetro un objeto(Oliver) la función debe retornar todos los animales que estén dentro de ese objeto,  debe retornar un array con todos los nombres */

/*  Hacer una funcion que reciba como parametro un objeto, esa funcion 
va a retornar un array con todos los animales que estan dentro de ese objeto */


let object ={
    result:true,
    animals:["leon","mono","gorila","leopardo","ñu","cocodrilo","hipopotamo","jirafa","bisonte"],
    type: "jungle",
    test: "available"
    };

    const jungleAnimals = (object) => {
        result = object.animals.filter((object) => object.length > 0);
        return result;
    }

   
console.log('los animales de la jungla son:',(jungleAnimals(object)));