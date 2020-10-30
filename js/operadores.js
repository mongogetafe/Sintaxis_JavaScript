// Operadores

// operando1 operador operando2 (binarios)
// operando operador (unarios)
// ternario (ver sintaxis más adelante)

// Tipos de operadores

// Operadores Aritméticos

// + y -

let resultado = 6;
let factorCorreccion = 2;

let puntuacion = resultado - factorCorreccion;
console.log(puntuacion);

puntuacion = resultado + 10;
console.log(puntuacion);

// El operador suma también sirve para concatenar

let nombre = 'Laura';
let mensaje;

mensaje = '¡Bienvenida ' + nombre + '!';
console.log(mensaje);

resultado = 10;
factorCorreccion = '3';

puntuacion = resultado + factorCorreccion;
console.log(puntuacion);

// * y /

let a = 10;
let b = 2;

resultado = a / b;
console.log(resultado);

// Valor NaN (not a number)

a = 'Hello';
resultado = a * b;
console.log(resultado);

// Resto %

let ejemploResto = 13 % 2;
console.log(ejemploResto);

// Incremento ++ (suma una unidad a la variable)

let c = 1;

console.log(c++); // Postincremento
console.log(c); 

let d = 10;
console.log(++d); // Preincremento

// Decremento -- (resta una unidad a la variable)

let e = 4;
console.log(--e);

// Precedencia de operaciones 
// de derecha a izquierda e igual matemáticas

resultado = 12 + 3 * 8;
console.log(resultado);

resultado = (12 + 3) * 8;
console.log(resultado);

// Operadores de asignacion

// =

// Asignación de adición +=

let puntuacion1 = 4;
let puntuacion2 = 9;

puntuacion1 += puntuacion2; // puntuacion1 = puntuacion1 + puntuacion2;
console.log(puntuacion1);

// -= *= /= %=

// Operación de comparación

// Operador de igualdad ==

let ciudad = 'Cáceres';
let termino = 'Cáceres';

let hayCoincidencia = ciudad == termino;
console.log(hayCoincidencia);

// Es no estricto con los tipos de datos

let valor1 = 3;
let valor2= '3';

hayCoincidencia = valor1 == valor2;
console.log(hayCoincidencia);

// Operador de igualdad estricta ===

hayCoincidencia = valor1 === valor2;
console.log(hayCoincidencia);

// Operador de desiguald !=

// Operador de desigualdad estricta !==

hayCoincidencia = valor1 !== valor2;
console.log(hayCoincidencia);

// Operador Mayor que >

valor1 = 8.4;
valor2 = 3;

resultado = valor1 > valor2;
console.log(resultado);

// Operador Mayor o igual que >=

// Operador Menor que <

// Operador Menor o igual que <=

// Operadores lógicos

// Operador lógico AND &&

valor1 = 12;
valor2 = 13;
let valor3 = 12;

resultado = valor2 < valor1 && valor1 === valor3;
console.log(resultado);

// Operador lógico OR ||

resultado = valor2 < valor1 || valor1 === valor3;
console.log(resultado);

// Operador Lógico NOT ! (Negación unaria)

let mayorEdad = false;

mayorEdad = !mayorEdad;

console.log(mayorEdad);

// Operador condicional (Ternario)

// expresiónDeCondicion ? valor1 : valor2;

let estado;
let edadAlumno = 14;

estado = edadAlumno >= 18 ? 'Adulto' : 'Menor';
console.log(estado);



