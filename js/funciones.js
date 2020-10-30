// Sintaxis de declaración

// function nombreFuncion (parámetros) {
    // código que ejecuta la función
    // return lo que devuelva
// }

function suma (a, b) {
    console.log(a + b);
}

function division (a, b) {
    let c = a / b;
    return c;
}

// Just for fun

function multiplicacion (a, a) {
    console.log(arguments[0]);
    return a * a;
}

// Sintaxis de invocación

// nombreFuncion(argumentos)

suma(4,6);

let resultado = division(10,5);
console.log(resultado);

resultado = multiplicacion(2,4);
console.log(resultado);

// Expression functions (anónimas)

let cuadrado = function (a) {
    return a*a;
}

console.log(cuadrado(5));

// Funciones como argumento 


setTimeout(function () {
    console.log('Hola Mundo a los 5 segundos');
}, 5000) // Método propio de JavaScript de tipo 'timer' para delay de ejecución de código

console.log('Hola Mundo');

// Funciones flecha ECMAScript 6 (2015)

// let cubo = (a) => {
//     return a * a * a;
// }

// Simplificación de la función flecha
// - Si solo tiene un parámetro se pueden eliminar los paréntesis
// - Si solo tiene una línea en el cuerpo se pueden eliminar
//   tanto las llaves como el return

let cubo = a => a * a * a;
let mensaje = () => console.log('Hola');

console.log(cubo(5));

// Parámetros predeterminados

function producto (a, b = 1) {
    return a * b;
}

console.log(producto(5)); // Utilizará el valor por defecto del segundo parámetro

// Callbacks JavaScript permiten establecer parámetros que
// recibirán funciones como argumento para ser invocadas dentro
// de la funcion donde se definen

let segundos = 10;

function cuentaAtras(mostrarReloj) {
    setInterval(function () {
        if (segundos > 0) {
            --segundos;
            mostrarReloj(segundos);
        }
    }, 1000)
}

function tiempoEnSegundos(s) {
    console.log(s);
}

function tiempoEnMilisegundos(s) {
    console.log(s * 1000);
}

// cuentaAtras(s => {console.log('Segundos ' + s)});

// Ámbito de las variables y constantes

// Variables declaradas con var su ámbito es
// el de la función mas próxima

var apellidos = 'López Pérez'; // ámbito global
var apellidos = 'Fernández'; // se pueden redeclerar

function setMayorEdad(edad) {
    if (edad >= 18) {
        var adulto = true;
    } else {
        var adulto = false;
    }
    console.log(adulto);
}

// console.log(adulto); devolvería error porque su ámbito
// es el de la función setMayorEdad()

setMayorEdad(47); 

// Variables declaradas con let su ámbito
// será el del bloque de código más próximo

let ciudad = 'Barcelona'; // Ámbito global
// let ciudad = 'Getafe'; devuelve error

function setPuntuacion (puntuacion) {
    if (puntuacion >= 5) {
        let apto = true;
    } else {
        let apto = false;
        console.log(apto);
    }
    //console.log(apto);
}

setPuntuacion(3);

// Variables declaradas sin palabra reservada su ámbito
// será siempre global con independencia de donde se declaren

function areaTriangulo (a, b) {
    area = .5 * a * b;
}

areaTriangulo(4,7);

console.log(area);


