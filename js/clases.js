// Declaración de objetos mediante clases (ECMA6 2015)

class Vehiculo {

    constructor (marcaIn, modeloIn, colorIn) {
        this.marca = marcaIn; // propiedades son públicas por defecto
        this.modelo = modeloIn;
        this.color = colorIn;
        // Forma de tener una propiedad privada
        let precio;
        this.setPrecio = valor => precio = valor;
        this.getPrecio = _ => precio; // Los paréntesis vacíos se pueden cambiar por _
    }

    cambiarColor(color) {
        this.color = color;
    }

}

let vehiculo1 = new Vehiculo('Renault', 'Megane', 'Rojo');

console.log(vehiculo1.modelo);

vehiculo1.setPrecio(10000);
console.log(vehiculo1.getPrecio());

// Clases con propiedades privadas (de muy reciente implementación de soporte para navegadores)
// Métodos get y set 

class Empleado {

    nombre;
    apellidos;
    #edad; // Propiedad sería privada
    #departamento; 

    constructor (nombre, apellidos) {
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

    setEdad(e) {
        this.#edad = e;
    }

    getEdad() {
        return this.#edad;
    }

    set departamento(departamentoIn) {
        this.#departamento = departamentoIn;
    }

    get departamento() {
        return this.#departamento;
    }

}

let empleado1 = new Empleado('Laura','Pérez');
empleado1.setEdad(25);

console.log(empleado1.getEdad());

empleado1.dni = '55576576D';
console.log(empleado1);

empleado1.departamento = 'Ventas';  // En la invocación los métodos get y set se usan como propiedades
console.log(empleado1.departamento);

// Herencia

class Rectangulo {

    #alto;
    #ancho;

    constructor(alto, ancho) {
        this.#alto = alto;
        this.#ancho = ancho;
    }

    getArea() {
        return this.#alto * this.#ancho;
    }

}

let poligono1 = new Rectangulo(10, 20);
console.log(poligono1.getArea());

class Cuadrado extends Rectangulo {

    constructor(lado) {
        super(lado, lado);
        this.lado = lado;
    }

    getMensajeArea () {
        return 'El area es ' + super.getArea();
    }
}

let poligono2 = new Cuadrado(15);
console.log(poligono2.getArea());
console.log(poligono2.getMensajeArea());