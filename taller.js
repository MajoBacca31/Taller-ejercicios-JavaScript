// Ejercicio 1.1
var nombre = "Laura";
console.log(nombre);

// Reasignamos un nuevo nombre a la variable
nombre = "Carlos";
console.log(nombre);

// Ejercicio 1.2: Uso de 'const'
// Declaramos la variable 'nombreConstante' con 'const' y le asignamos un valor.
const nombreConstante = "Ana";
console.log(nombreConstante);

// Intentamos reasignar un nuevo valor. Esto causará un error.
try {
  nombreConstante = "David"; // Esta línea va a fallar.
} catch (error) {
  // Capturamos el error para que la aplicación no se detenga.
  console.log("Error:", error.message); 
  console.log("El error ocurre porque 'const' no permite la reasignación.");
}

// Ejercicio 1.3: Uso de 'let' dentro de un bloque
let tieneCoche = false;
if (tieneCoche) {
  let edad = 25;
}

// Intentamos acceder a 'edad' fuera del bloque. Esto causaria un error.
try {
  console.log("Valor de 'edad' (let):", edad);
} catch (error) {
  // Capturamos el error.
  console.log("Error:", error.message);
  console.log("El error ocurre porque 'edad' está fuera de su ámbito (el bloque 'if').");
}

// Ejercicio 2.1: Tipos de Datos Primitivos

// Un "string", cadena de texto.
let miNombre = "Mojito";
console.log(`${typeof miNombre}`);

// "number" número (entero o decimal).
let miEdad = 22;
console.log(`${typeof miEdad}`);

// "boolean" valor que solo puede ser verdadero o falso.
let esProgramador = true;
console.log(`${typeof esProgramador}`);

// "null" significa "vacío a propósito".
let cajaVacia = null;
console.log(`${typeof cajaVacia}`);

// "undefined" significa que una variable existe, pero no tiene valor asignado.
let sinValor;
console.log(`${typeof sinValor}`);

// Ejercicio 3.1
let numero1 = 10;
let numero2 = "5";

// ¿Qué sucedió en la suma?
// JavaScript convierte el número 10 a "10" (string) y los une.
// El resultado es un string: "105".
console.log("Resultado de 10 + '5':", numero1 + numero2);

// ¿Qué sucedió en la multiplicación?
// JavaScript convierte el string "5" a 5 (number) y los multiplica.
// El resultado es un número: 50.
console.log("Resultado de 10 * '5':", numero1 * numero2);

// Ejercicio 4.1: Operadores de Comparación
console.log("--- Ejercicio 4.1: Operadores de Comparación ---");
let numero = 10;
let textoNumero = "10";
console.log("¿10 == '10'?", numero == textoNumero);
console.log("¿10 === '10'?", numero === textoNumero);


// Ejercicio 4.2: Condicional if/else y operador %
numero = 9;

// Usamos el operador '%' (modulo) para saber si el residuo de la division por 2 es 0.
if (numero % 2 === 0) {
  // Si el residuo es 0, es un numero par.
  console.log(`El numero ${numero} es par.`);
} else {
  // Si el residuo no es 0, es un numero impar.
  console.log(`El numero ${numero} es impar.`);
}

// Ejercicio 4.3: Ciclo for

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Ejercicio 5.1: Función tradicional
// Definimos la funcion 'multiplicar'.
function multiplicar(a, b) {
  return a * b; // Retorna el producto de los dos numeros.
}

// Llamamos a la funcion y guardamos el resultado.
let resultado = multiplicar(5, 3);
console.log("El resultado de 5 * 3 es:", resultado);

// Ejercicio 6.1: Alcance (Scope)

let variableGlobal = "Soy una variable global.";
function mostrarVariables() {
  // Declaramos una variable local dentro de la funcion.
  let variableLocal = "Soy una variable local.";
  
  // Dentro de la funcion, podemos acceder a ambas.
  console.log("Dentro de la funcion:");
  console.log(variableGlobal);
  console.log(variableLocal);
}

mostrarVariables();
console.log("\nFuera de la funcion:");
console.log(variableGlobal);

// Intentamos acceder a la variable local.
try {
  console.log(variableLocal);
} catch (error) {
  console.log("Error:", error.message);
  console.log("El error ocurre porque no podemos acceder a 'variableLocal' fuera de la funcion.");
}

// Ejercicio 6.2: El Contexto 'this'
// Creamos un objeto 'coche' con una propiedad y un metodo.
let coche = {
  marca: "Toyota",
  // 'mostrarMarca' es un metodo del objeto.
  mostrarMarca: function() {
    // 'this' se refiere al objeto 'coche'.
    console.log("La marca del coche es:", this.marca);
  }
};

// Llamamos al metodo del objeto.
coche.mostrarMarca();

// Explicacion:
console.log("Explicacion de 'this':");
console.log("En este caso, 'this' dentro del metodo 'mostrarMarca' se refiere al objeto 'coche'.");
console.log("Por eso, 'this.marca' accede a la propiedad 'marca' de dicho objeto.");

// Ejercicio 7.1: Mutabilidad de los Arrays
let frutas = ["Manzana", "Banana"];
console.log("Array original:", frutas);

// 'push()' agrega un elemento al final del array.
frutas.push("Naranja");
console.log("Despues de 'push()':", frutas); // El array 'frutas' ha sido modificado.

// 'pop()' elimina el ultimo elemento del array.
frutas.pop();
console.log("Despues de 'pop()':", frutas);

// Ejercicio 7.2: Inmutabilidad de los Arrays
let numeros = [1, 2, 3];
console.log(numeros);
let numerosMultiplicados = numeros.map(numero => numero * 2);
console.log(numerosMultiplicados);
console.log(numeros);

let numerosMayoresA1 = numeros.filter(numero => numero > 1);
console.log(numerosMayoresA1);
console.log(numeros);

// Ejercicio 7.3: Iteracion y busqueda en Arrays
let frutasIteracion = ["Manzana", "Banana", "Naranja", "Banana"];

// 'forEach()' itera sobre el array.
console.log("Iterando con 'forEach()':");
frutasIteracion.forEach(fruta => {
  console.log(fruta);
});

// 'find()' encuentra el primer elemento que coincide.
let frutaEncontrada = frutasIteracion.find(fruta => fruta === "Banana");
console.log(frutaEncontrada);

// 'findIndex()' encuentra el indice del primer elemento que coincide.
let indiceEncontrado = frutasIteracion.findIndex(fruta => fruta === "Manzana");
console.log(indiceEncontrado);

// Ejercicio 8.1: Metodos en Objetos
let libro = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",

  // Añadimos un metodo llamado 'mostrarInfo'
  mostrarInfo: function() {
    // 'this' se refiere al objeto 'libro'
    console.log(`El libro "${this.titulo}" fue escrito por ${this.autor}.`);
  }
};

libro.mostrarInfo();

// Ejercicio 8.2: Clases
class Animal {
  // El constructor se ejecuta al crear una nueva instancia de la clase.
  constructor(nombre) {
    this.nombre = nombre;
  }

  // Agregamos un metodo a la clase.
  saludar() {
    return `¡Hola, soy ${this.nombre}!`;
  }
}

let miAnimal = new Animal("León");

// Llamamos al metodo del objeto.
console.log(miAnimal.saludar());

// Ejercicio 8.3: Herencia de Clases
class Perro extends Animal {
  constructor(nombre, raza) {
    // Usamos 'super()' para llamar al constructor de la clase padre (Animal).
    super(nombre);
    this.raza = raza; // Agregamos una propiedad especifica para 'Perro'.
  }

  // El metodo 'saludar' es heredado de 'Animal'.
}

// Creamos una instancia de la clase 'Perro'.
let miPerro = new Perro("Max", "Golden Retriever");

// Llamamos al metodo 'saludar' (que es heredado).
console.log(miPerro.saludar());

