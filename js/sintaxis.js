console.log('¡Hola Mundo!'); // Comentario en línea JavaScript

let objetoEjemplo = {
    nombre: 'Juan'
}

/* Comentario en
   bloque */

// Características de la sintaxis JavaScript

// - Ignora los espacios en blanco
// - Es case-sensitive (distingue mayúsculas de minúsculas)
// Las instrucciones y sentencias finalizan con punto y coma (opcional)
// ASI Automatic semicolom insert


// Variables

// Declaración de variables

// Con la palabra reservada var (clásica)

var edad; // No se define el tipo de dato

// Identificadores

// - Tienen que comenzar por vocal | $ | _
// - No se pueden utilizar palabras reservadas
// - (Buena práctica) utilizar camelCase (primerApellido)
// - (Buena práctica) utilizar nombres semánticos

// Con la palabra reservada let (6 ECMA2015)

let primerApellido; // Modifica el ámbito a partir de ECMA2015

// Declaración global (exige inicialización)

direccion = 'c/ Serrano Galvache, 33'; // Mala práctica

// Declaración e inicialización

let localidad = 'Getafe';

// Podemos declarar varias variables a la vez (,)

let email, 
    telefono, 
    codigoPostal;



// Constantes (valor no cambiará durante la ejecución del programa)

var URLSERVER = 'http://...'; // Pre ECMA2015

const urlPedidos = 'http://...'; 

// urlPedidos = 'Pediente'; Error no se pueden reasignar valores

// Tipos de datos en JavaScript

// Tipado de datos es débil y dinámico

email = 'pedro@pedro.com';
email = 22;

// Tipos primitivos

// string o cadena alfanumérica  (Comillas dobles o simples)

let ciudad = 'Villa de \nMadrid'; 

let calle = 'O\'Donell 40';
console.log(ciudad, calle);
console.log(typeof calle); // Devuelve el tipo de la variable en ese momento

// number (numeros de todo tipo flotantes con punto, exponenciales con e)

let resultado = 8.6;

// boolean

let mayorEdad = false; // true o false

// Undefined 

let marca; // valor-tipo-dato undefined
console.log(marca);

// null

marca = null; // valor-tipo-dato (en minuscula)

// Tipos compuestos

// object

// - Arrays

// - Objetos

let resultados = [3,4,5];
console.log(typeof resultados);
console.log(calle.length);