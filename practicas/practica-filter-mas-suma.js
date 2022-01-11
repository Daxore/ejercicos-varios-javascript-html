/* enunciado 
crear una funcion que reciba como parametro un arreglo.
el mismo debe efectuar la suma solo de los numeros positivos*/


    let numeros = [-45,55,-78,5,7,99,5,4,-888,77,4,23,14,45,78,44,56]
    let numeros2 = [-1, -2, 1, 2]

    const SumaDeNumeros = (array) => {
    const filtradoDeNumeros = array.filter((valor)=> valor > 0)
    const resultado = (a,b) => a + b
    
    console.log(`El resultado de la funcion es: ${filtradoDeNumeros.reduce(resultado)}`)
    
    }
   SumaDeNumeros(numeros)