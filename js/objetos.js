// Objetos en JavaScript

// 1ª Forma de declarar objetos mediante literal
// {
//     propiedad1: valor,
//     propiedad2: valor,
//     ...
//     metodo() {
//         // código
//     }
// }

let jugador1 = {
    nombre: 'Sergio',
    apellidos: 'Ramos',
    dorsal: '4',
    goles: 0,
    equipos: ['Sevilla','Real Madrid'],
    marcarGol() {
        this.goles++;
    }
}

// Acceso objetos con notación del punto

console.log(jugador1.dorsal);
jugador1.marcarGol();
console.log(jugador1.goles);

