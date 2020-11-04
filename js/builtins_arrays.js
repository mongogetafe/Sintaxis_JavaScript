// Métodos y propiedades propios de JavaScript para arrays

let frutas = ['manzanas','naranjas','kiwis'];

// Métodos mutables (van a modificar el valor de la variable de tipo array)

let frutaExtraida = frutas.pop(); // Eliminar el último elemento del array 

console.log(frutas);
console.log(frutaExtraida);

frutas.push('albaricoques','cerezas'); // Añade elementos al final del array
console.log(frutas);

frutas.shift(); // extrae el primer elemento del array y desplaza el resto a la izda
console.log(frutas);

frutas.unshift('plátanos','fresas'); // Añade elementos desde el principio desplazando el resto a la dcha
console.log(frutas);

// Método splice para eliminar o susituir elementos
// splice(índice, cantidad, elementos opcionales a sustituir)

frutas.splice(1, 3);
console.log(frutas);

frutas.splice(1,1); // Eliminar un elemento en una posición concreta
console.log(frutas);

frutas = ['manzanas','naranjas','kiwis'];

frutas.splice(1,1, 'plátanos'); // Sustituye el o los elementos desde la posición indicada
console.log(frutas);

frutas.splice(1,0, 'sandías'); // Añade el elemento desde la posición indicada
console.log(frutas);

frutas.sort(); // Ordena los elementos (lexicográfico Aa0*)
console.log(frutas);

frutas.reverse(); // Invierte el orden de todos los elementos;
console.log(frutas);

// Los métodos se pueden encadenar en JavaScript

let marcasVehiculos = ['Dacia','VW','SEAT','Audi','Renault'];

marcasVehiculos.sort().reverse();

console.log(marcasVehiculos);

// Método inmutables (no modifican el valor de la variable de tipo array)

frutas = ['manzanas','naranjas','kiwis','fresas','plátanos','mandarinas'];

let frutasSeleccionadas = frutas.slice(2, 4); // Extrae elementos desde la posición del primer parámetro
                                          // incluida hasta la posición del segundo parámetro excluida
console.log(frutasSeleccionadas);

let hayPomelos = frutas.includes('pomelos'); // Devuelve true o false si existe o no el elemento pasado como
                                             // como argumento
console.log(hayPomelos);

let mensaje = frutas.join(' | '); // Devuelve todos los elementos del array en un string separados por 
                                  // la cadena pasada como argumento o comas si no se pasa argumento
console.log(mensaje);

let marcasEuropeas = ['SEAT','Renault','Mercedes Benz'];
let marcasAsiaticas = ['Toyota','Mazda'];

let marcas = marcasEuropeas.concat('Subaru','Hyunday').concat(marcasAsiaticas); // Concantenar elementos como un push pero sin mutar
                                                    // All credits to Aroa!!!!

console.log(marcas);

// Paso por valor y por referencia en JavaScript

// Los tipos primitivos tienen su paso por valor

let a = 'Juan';
let b = a; // Pasa el valor 'Juan'
console.log(b);
b = 'Carlos';
console.log(b);
console.log(a); // Mantiene el valor 'Juan'

// Los tipos no primitivos tienen su paso por referencia

let c = [1,2,3];
let d = c; // El paso se produce por referencia
console.log(d);

d.push(4);
console.log(c);
console.log(d);

// En el caso de arrays podemos romper el paso por referencia con concat

console.log(marcasEuropeas);

let marcasSeleccionadas = marcasEuropeas.concat();

marcasSeleccionadas.push('Peugeot','Ferrari');

console.log(marcasEuropeas);
console.log(marcasSeleccionadas);

// Operadores spread ... ECMA6 2015

let marcasCoreanas = ['Kia','Hyundai'];

marcasAsiaticas.push(...marcasCoreanas);
console.log(marcasAsiaticas);

// Parámetros rest ... ECMA6 2015

function setCategorias (...categorias) {
    return categorias;
}

let producto1 = setCategorias('running','hombres','rebajas');
console.log(producto1);