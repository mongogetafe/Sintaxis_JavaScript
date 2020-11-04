// Métodos y propiedades propios de JavaScript para fechas

// Obtenemos o generamos fechas a través de instancias del objeto Date

// Obtener la fecha actual con una instancia de Date sin argumentos

let fechaActual = new Date();
console.log(fechaActual);
console.log(typeof fechaActual); // No hay tipo primitivo para las fechas pero serán un objeto de la clase Date

// Establecemos fechas con Date
// 1ª Opción pasándole los argumentos año, mes, dia, hora, minuto, segundo, milisegundo

let mesIn = 11;

let fechaNacimiento =  new Date(75, --mesIn, 22); // Importante mes indexado a cero
console.log(fechaNacimiento);

let fechaAlta = new Date(2020, 0, 1); // Años diferentes al siglo XX pasar 4 dígitos al primer argumento
console.log(fechaAlta);

// 2ª Opción pasándole fecha-string 'yyyy-MM-dd'

let fechaExpedicion = new Date('2020-01-15'); // Los meses no van indexados a 0
console.log(fechaExpedicion);

// 3ª Opción pasandole un único argumento con milisegundos desde Fecha Epoch

let fechaRandom = new Date(154512321464752);
console.log(fechaRandom);

// Métodos 'get' del objeto Date

console.log(fechaActual.getFullYear()); // Devuelve el año en tipo number
console.log(fechaActual.getMonth()); // Devuelve el mes en tipo number (indexado a cero)

let meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
];

let mesActual = meses[fechaActual.getMonth()];
console.log(mesActual);

console.log(fechaActual.getDate()); // Devuelve el día del mes en tipo number
console.log(fechaActual.getDay()); // Devuelve el día de la semana en tipo number
console.log(fechaActual.getHours()); // Devuelve la hora de la fecha en tipo number
console.log(fechaActual.getMinutes()); // Devuelve los minutos de la fecha en tipo number
console.log(fechaActual.getSeconds()); // Devuelve los segundos de la fecha en tipo number
console.log(fechaActual.getMilliseconds()); // Devuelve los milisegundos de la fecha en tipo number

console.log(fechaActual.getTime()) // Milisegundos desde Epoch en tipo number

let fechaSalida = new Date(fechaActual.getTime() + 3 * 24 * 60 * 60 * 1000);
console.log(fechaSalida);