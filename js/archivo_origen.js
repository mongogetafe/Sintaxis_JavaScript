 export class Vehiculo { // Exporta la clase

    constructor (marcaIn, modeloIn, colorIn) {
        this.marca = marcaIn; 
        this.modelo = modeloIn;
        this.color = colorIn;
        
        let precio;
        this.setPrecio = valor => precio = valor;
        this.getPrecio = _ => precio; 
    }

    cambiarColor(color) {
        this.color = color;
    }

}