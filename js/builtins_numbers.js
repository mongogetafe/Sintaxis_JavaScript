// Métodos y propiedades propios JavaScript para tipos number

// Parseo de string a number

let resultado = '9.7'; // Tipo string

// resultado = parseInt(resultado); Devuelve la parte entera y la convierte a number


resultado = parseFloat(resultado); // Conversion a number manteniendo la parte flotante

console.log(resultado);

// Parseo de number a string

let puntuacion = 9;

puntuacion = puntuacion.toString();
console.log(typeof puntuacion);

// Objeto Math

let puntuacion2 = -2.5;
let puntuacionFinal;

if (puntuacion2 < 0) {
    puntuacionFinal = Math.round(-puntuacion2) * -1; // Se suele convertir a positivo para evitar el rendondeo de los .5
} else {
    puntuacionFinal = Math.round(puntuacion2); // Se suele convertir a positivo para evitar el rendondeo de los .5
}

console.log(puntuacionFinal);

let puntuacionSuelo = Math.floor(puntuacion2);

console.log(puntuacionSuelo);

let puntuacionTecho = Math.ceil(puntuacion2);

console.log(puntuacionTecho);

// Random devolver un numero entre 0 y 0.999999999

let aviso = document.getElementById('aviso');

let nombres = ['Juan','Sara','Carlos','Raquel'];

function nombreAzar() {
    aviso.innerHTML =  nombres[Math.floor(Math.random() * nombres.length)];
}
