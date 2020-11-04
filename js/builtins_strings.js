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

let apellidos = 'Pérez Gómez';

let nombreCompleto = nombre.concat(' ' + apellidos);

console.log(nombreCompleto);

let frase = '       En un lugar de La Mancha...           '; // Elimina espacios en blanco al comienzo y fin
                                                             // de la cadena de caracteres
console.log(frase.trim());

console.log(apellidos.repeat(4)); // Repite la cadena tantas veces indiquemos con el entero

let cadena = '01234abcde';

console.log(cadena.slice(2,5))  // Devuelve el fragmento de cadena desde la primera posición incluida (1er parámetro)
                            // hasta la segunda posición no incluida (2º parámetro)

console.log(cadena.slice(-2)) // Pasándo argumento negativo devuelve los n últimos caracteres
console.log(cadena) // es inmutable

// Template literals (nueva sintaxis para string de ECMA6 2015)
// Escribir cadenas multilínea sin secuencias de escape
// Permite interpolar expresiones dentro de las cadenas

// Sintaxis

// let identificador = ` ... caracteres ${expresion} ....
//                        ...  `

let puntuacion = 0.87;

let mensaje = `La jugadora ${nombre} ${apellidos}
tiene una puntuación de ${puntuacion * 100}`;

console.log(mensaje);

let aviso = document.getElementById('aviso');

aviso.innerHTML = `<ul>
                        <li>${nombre}</li>
                        <li>${apellidos}</li>
                    </ul>`;

