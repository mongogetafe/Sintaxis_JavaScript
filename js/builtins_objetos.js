// Métodos y propiedades propios de JavaScript para arrays de objetos

let jugadores = [
    {nombre: 'María', apellidos: 'Zuil', puntuacion: 4.6},
    {nombre: 'Juan', apellidos: 'Gómez', puntuacion: 7},
    {nombre: 'Laura', apellidos: 'López', puntuacion: 9.6}
];

console.log(jugadores[1]);

// Ciclo forEach ECMA6 2015
// <array>.forEach((elem, i) => {      La función flecha se ejecuta tantas veces como elementos tenga el array
    // Código a ejecutar con cada elemento
// })

// jugadores.forEach(elem => {
//     if(elem.puntuacion >= 5) {
//         elem.apto = true;
//     } else {
//         elem.apto = false;
//     }
// })

let jugadoresAptos = [];

jugadores.forEach(elem => {
    if(elem.puntuacion >= 5) {
        jugadoresAptos.push(elem);
    }
})

console.log(jugadores);
console.log(jugadoresAptos);

// Ciclo Map ECMA6 2015
// Devuelve en un array el resultado del código utilizado sobre cada elemento
// <array>.map((elemento, indice) => {
    // código a ejecutar con cada elemento
    // return
// })

let nombresJugadores = jugadores.map((elem, i) => {
    return `${i + 1}.- ${elem.nombre} ${elem.apellidos}`;
});

console.log(nombresJugadores);

// Ciclo Filter ECMA6 2015
// Devuelve en un array los elementos que cumplan una condición (de filtro)
// <array>.filter((elemento, indice) => {
   // return expresión condicional
//})

let jugadoresNoAptos = jugadores.filter(elem => {
    return elem.puntuacion < 5;
})

console.log(jugadoresNoAptos);

// Ciclo Reduce ECMA6 2015
// Recorre los valores y en cada ciclo de iteración
// actualiza (código) un valor de inicio y otro valor de fin
// a partir de los valores de cada elemento
// <array>.reduce((inicio, fin) => {
    // Código valor inicio y valor fin
// })

jugadores[0].puntuacion = [4.5,6.5,7.8];
jugadores[1].puntuacion = [9.4,6.5,6.8];
jugadores[2].puntuacion = [7.5,4.5,7.9];
jugadores[0].puntuacionMedia = null;
jugadores[1].puntuacionMedia = null;
jugadores[2].puntuacionMedia = null;

jugadores.forEach(elem => {
    let suma = elem.puntuacion.reduce((inicio, fin) => {
        return inicio + fin;
    })
    elem.puntuacionMedia = suma / elem.puntuacion.length;
})

console.log(jugadores);

// Método sort para arrays de objetos
// Permite pasar funciones como argumentos

function compararAscend (a, b) {
    if (a.apellidos > b.apellidos) {
        return 1;
    }
    if (a.apellidos < b.apellidos) {
        return -1;
    }
    return 0;
}

function compararDescend (c, d) {  // Importante los parámetros diferentes porque 
    if (c.apellidos < d.apellidos) { // los paramétros no primitivos pasan por referencia
        return 1;
    }
    if (c.apellidos > d.apellidos) {
        return -1;
    }
    return 0;
}

jugadores.sort(compararAscend);

console.log(jugadores);

