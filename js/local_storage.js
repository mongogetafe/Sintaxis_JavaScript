// Objeto JSON para parsear de objeto JavaScript a Json y viceversa

let jugador = {
    nombre: 'Sergio',
    apellidos: 'Ramos',
    goles: 0
}

let jugadorEnJson = JSON.stringify(jugador); // Parsea JS a Json
console.log(jugadorEnJson);

let nuevoJugador = JSON.parse(jugadorEnJson); // Parsea Json a JS
console.log(nuevoJugador);

// Uso de JSON en localStorage

let participantes = [
    {nombre: 'Laura', apellidos: 'López'},
    {nombre: 'Carlos', apellidos: 'Fernández'}
];

// Objeto localStorage setItem() | getItem() | removeItem()

localStorage.setItem('participantes', JSON.stringify(participantes)); // !er Argumento Nombre Item, 2º Argumento Valor JSON o string 

let nuevosParticipantes = JSON.parse(localStorage.getItem('participantes'));
console.log(nuevosParticipantes);

localStorage.removeItem('participantes');