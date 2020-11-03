// Métodos y propiedades propios de JavaScript para tipo string

let nombre = 'Juan';

console.log(nombre.length); // Devolver longitud del string (nº de caracteres)
console.log(nombre.toLowerCase());  // devolver el string en minúsculas 
console.log(nombre); // El método es inmutable (no modifica el valor)
console.log(nombre.toUpperCase());
console.log(nombre.charAt(2)); // Devuelve el caracter de la posición (indexado a cero)
console.log(nombre.indexOf('n')); // Devuelve la posición del caracter (1ª Coincidencia)
console.log(nombre.indexOf('k')); // Si no encuentra el caracter devuelve -1

nombre = 'Amanda';

console.log(nombre.lastIndexOf('a'));  // Devuelve la posición del caracter en su última coincidencia
console.log(nombre.includes('nda')) // Devuelve true o false si encuentra o no la cadena de caracteres
console.log(nombre.startsWith('A')); // Devuelve true o false si la cadena comienza por el argumento
console.log(nombre.endsWith('z')); // Devuelve true o false si la cadena finaliza por el argumento