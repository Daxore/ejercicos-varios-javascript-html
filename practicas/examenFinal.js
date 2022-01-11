//Tarea Hugo 3
//Hacer 3 funciones. la primera debe recibir como parametro un arreglo de objetos con las siguientes caracteristicas: Nombre, Apellido, Curso, Nota, Conducta (Boolean). La funcion debe retornar "El estudiante (Nombre y apellido) del curso (curso), tiene una nota de (Nota) y debe tener una longitud de minimo 10 objetos"

//La segunda debe recibir como parametro el mismo arreglo de objetos, pero debe retornar el promedio del curso, es decir, la suma de todas las notas divididas por el total de notas e imprimirlo en consola

//La tercera debe recibir de igual manera el mismo arreglo de objetos, pero esta vez debe tener una validacion, si La conducta del estudiante es true y su nota es mayor a 10, entonces se imprima por consola un mensaje diciendo "El estudiante pasa de curso", en cambio, si la conducta del estudiante es false y sin importar su nota se imprima por consola "El estudiante reprueba el curso", y si la nota es menor a 10, tambien imprima "El estudiante reprueba el curso"

//Datos a tomar en cuenta
//Las funciones deben servir con otros objetos iguales o similares
//Debe usar Destructuring
//Usar templateStrings
//No modificar el arreglo de objetos original

const estudiantes = [
    {
      id: 1,
      nombre: "Boby",
      apellido: "rodrigues",
      nota: 17,
      curso: "Spartan Developers",
      conducta: true,
    },
    {
      id: 2,
      nombre: "Eliezer",
      apellido: "Gil",
      nota: 16,
      curso: "Spartan Developers",
      conducta: false,
    },
    {
      id: 3,
      nombre: "Fabiana",
      apellido: "rodrigues",
      nota: 18,
      curso: "Spartan Developers",
      conducta: true,
    },
    {
      id: 4,
      nombre: "Rebeca",
      apellido: "Mendez",
      nota: 20,
      curso: "Spartan Developers",
      conducta: true,
    },
    {
      id: 5,
      nombre: "Reiner",
      apellido: "Ramires",
      nota: 12,
      curso: "Spartan Developers",
      conducta: false,
    },
    {
      id: 6,
      nombre: "Deilian",
      apellido: "Smirnoft",
      nota: 13,
      curso: "Spartan Developers",
      conducta: false,
    },
    {
      id: 7,
      nombre: "Vanessa",
      apellido: "Saveda",
      nota: 14,
      curso: "Spartan Developers",
      conducta: false,
    },
    {
      id: 8,
      nombre: "Yolvelis",
      apellido: "Dechelt",
      nota: 17,
      curso: "Spartan Developers",
      conducta: true,
    },
    {
      id: 9,
      nombre: "Valentina",
      apellido: "Gil",
      nota: 20,
      curso: "Spartan Developers",
      conducta: true,
    },
    {
      id: 10,
      nombre: "Boby",
      apellido: "rodrigues",
      nota: 05,
      curso: "Spartan Developers",
      conducta: false,
    },
  ];
//Lista de estudiantes
  const listaDeEstudiantes = (estudiantes) => {
      estudiantes.map(({nombre, apellido, curso, nota}) => { console.log(`El estudiante ${nombre} ${apellido} del curso ${curso}, tiene una nota de ${nota}`)})  
     
  }
  listaDeEstudiantes(estudiantes)
  
  //Promedio escolar
  //funcion 
  const promedioEscolar = (estudiantes) => {
    //Variable con metodo map para saber cual es el promedio del curso 
    let notas = estudiantes.map((alumno) => {return alumno.nota});
               let totalMap = estudiantes.length;
  
               let sumaDeTotalDeNotas  = notas.reduce((a, b) => a + b);
  
               return sumaDeTotalDeNotas / totalMap;
  }
  console.log(`El Promedio escolar es de: ${promedioEscolar(estudiantes)}`)
  
  //Validacion de aprobado
  
  const validacion = (estudiantes) => {
    for (const alumno of estudiantes) {
      // Desestructurar
      let { nombre, apellido, nota, conducta } = alumno;
      // las variables directamente
      if (conducta && nota >= 10) {
        console.log(`${nombre} ${apellido} - Aprobado`);
      } else {
        console.log(`${nombre} ${apellido} - No Aprobado`);
      }
    }
  };

  validacion(estudiantes);
  