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
    nombre: 'Sergio',  // Las propiedades son públicas por defecto
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

jugador1.apellidos = 'Ramos González';
console.log(jugador1['nombre']); // Forma alternativa de acceso a propiedades

// jugador1 = 4; // Atención el uso de objetos no impide que JS siga siendo 'tipado dinámico'
// console.log(typeof jugador1);

jugador1.edad = 30;
console.log(jugador1);

// 2ª Forma de declarar objetos con Object

// new Object()

let jugador2 = new Object(); // Establecer el tipo objeto (vacío)    similar a let jugador2 = {};
jugador2.nombre = 'Lionel';
jugador2.apellidos = 'Messi';
jugador2.dorsal = '10';
jugador2.goles = 0;
jugador2.marcarGol = function () {
    this.goles++;
}

jugador2.marcarGol();
console.log(jugador2);

// 3ª Forma de declarar objetos con función constructora (lo más parecido a clases y sus instancias)

function Jugador (nombreIn, apellidosIn, dorsalIn, golesIn) {
    this.nombre = nombreIn;
    this.apellidos = apellidosIn;
    this.dorsal = dorsalIn;
    this.goles = golesIn;

    this.marcarGol = function () {
        this.goles++;
    }
}

// "Instanciar" objetos de esa función constructora de objetos con la palabra new

let jugador3 = new Jugador('Rafael','Varane','08', 0);
let jugador4 = new Jugador('Julio','Iglesias', '01', 0);

jugador3.marcarGol();
jugador3.draosl = '09'; // Es  mala práctica
console.log(jugador3);

jugador4.anulaGol = function() { this.goles-- }; // Es mala práctica
jugador4.anulaGol();
console.log(jugador4);

// jugador3.anulaGol(); Al no estar en la función constructora solo lo tendrá el literal ojugador3

// 4ª Forma Factory functions

function Empleado (nombre, apellidos) {
    return {
        nombre,
        apellidos
    }
}

let empleado1 = Empleado('Juan','López');
console.log(empleado1.nombre);