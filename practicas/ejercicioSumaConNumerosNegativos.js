/*Estructuracion:
    -Crear funcion
    -array de numeros negativos y positivos
    -imprimir por cpnsola
Tarea Hugo
Hacer una funcion que reciba como parametro un Array con numeros positivos y negativos, la funcion debe devolver la suma de todos los numeros positivos y imprimirlos en la consola */


    let num = [-1, -2, 1, 2]

    const sumOfNumbers = (num) => {
    const filteringNumbers = num.filter((valor)=> valor > 0) 
    console.log(`El resultado de la funcion es: ${filteringNumbers.reduce((a,b)=>a+b)}`)
    
    }
   sumOfNumbers(num)
   