// Arrays (arreglos)

// let identificador = [elemento1, elemento2, ..., elementoN];
// let identificador = new Array(elemento1, elemento2, ..., elementoN);

let frutas = ['pera', 'manzana', 'naranja']; // permite elementos de cualquier tipo

console.log(frutas);

// Acceso a los elementos del array emplea la sintaxis identificador[expresion que devuelva posición]
// Posición de cada elemento será la que tenga en el índice del array que comienza en 0

let frutaSeleccionada = frutas[1];

console.log(frutaSeleccionada);

frutas[0] = 'cereza';
console.log(frutas);

// Es muy común usar arrays de objetos

let participantes = [
    {nombre: 'Juan', apellidos: 'Pérez'},
    {nombre: 'Laura', apellidos: 'Gómez'},
    {nombre: 'Lucía', apellidos: 'Sánchez'},
];

console.table(participantes[2]);