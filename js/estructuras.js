// Estructuras de control de flujo

// Estructura condicional if

// if (condición) {
//  código a ejecutar si se cumple esa condición
// }

let nombre = 'Laura';
let edad = 20;
let mayorEdad;

if (edad >= 18 && nombre !== undefined) {
    mayorEdad = true;
    console.log(nombre + ' es mayor de edad');
}

if (edad < 18) 
    console.log('Menor edad'); // No se suele emplear el alivio de llaves

// Estructura if else

// if (condición) {
//   código a ejecutar si se cumple la condición
// } else {
//   código a ejecutar si no se cumple la condición    
// }

let a = 10;
let b = 20;

if (a > b) {
    console.log('a es mayor que b');
} else {
    console.log('a es menor o igual que b');
}

// Estructura if else if

// if (condición) {
//   código a ejecutar si se cumple esta condición
// } else if (condición 2) {
//   código a ejecutar si se cumple esta condición 2    
// } else {
//   código a ejecutar si no se cumplen ninguna de las condiciones    
// }

a = b;

if (a > b) {
    console.log('a es mayor que b');
} else if (a === b) { 
    console.log('a es igual a b');
} else {
    console.log('a es menor que b');
}

// Estructura condicional switch

// switch (expresion) {
    // case valor1:
         // código ejecutar
         // break
    // ...
    // case valorN:
        // código a ejecutar
        // break
    // default
        // codigo a ejecutar si no se cumple ningún case
// }

let diaSemana = 'No sé en que día vivo';

switch (diaSemana) {
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miércoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sábado');
        break;
    case 7:
        console.log('Domingo');
        break;
    default:
        console.log('Día no válido');
}

let mes = 'octubre';

switch (mes) {
    case 'enero':
    case 'febrero':
    case 'marzo':
        console.log('1er Trimestre');
        break;
    case 'abril':
    case 'mayo':
    case 'junio':
        console.log('2o Trimestre');
        break;
    case 'julio':
    case 'agosto':
    case 'septiembre':
        console.log('3er Trimestre');
        break;
    case 'octubre':
    case 'noviembre':
    case 'diciembre':
        console.log('4o Trimestre');
        break;
    default:
        console.log('Mes nó válido');
}

// Estructura iterativa for

// for (valor inicial; condición; actualización) {
//      código a ejecutar mientras se cumpla la condición
// }

for (i = 0; i < 10; i++) {
    console.log('Hola');
    console.log('En cada iteracción i tendrá el valor de ' + i);
}

// Just for fun

let password;
// let contador = 1;

// for (password = prompt('Escribe tu contraseña'); 
//      password !== '1234'; 
//      password = prompt('Contraseña no válida, inténtelo de nuevo')) {
//     contador++;
// }

// console.log(contador);

// Estructura iterativa while

// while (condición) {
    // código a ejecutar mientras se cumpla la condición
// }

// password = '1234';

// while (password !== '1234') {
//     password = prompt('Escriba su contraseña');
// }

// Estructura iterativa do while

// do {
    // código a ejecutar mientras se cumpla la condición
// } while (condición)

do {
    password = prompt('Escriba su contraseña');
} while (password !== '1234');