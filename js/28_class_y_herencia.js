// POO
// classes

// nombre de la clase en mayúscula
class Producto {
    constructor(nombre, precio, disponible) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
    }
    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de $${this.precio}`
    }
    precioProducto() {
        return `$${this.precio} es el valor del producto ${this.nombre}`
    }
    obtenerPrecio() {
        console.log(this.precio);
    }
}

const producto1 = new Producto('Celular', 600, true);
const producto2 = new Producto('Monitor curvo de 49"', 800, true);
const producto3 = new Producto('Laptop', 500, false);

console.log(producto1);
console.log(producto2);
console.log(producto3);

console.log(producto1.formatearProducto());
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(producto3.precioProducto());
console.log(producto3.obtenerPrecio());

console.log();

// HERENCIA
// clase hija hereda de clase padre
class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio); // con super evitamos repetir código
        this.isbn = isbn;
    }
    formatearProducto() { // evitamos repetir código
        return `${super.formatearProducto()} y su isbn es ${this.isbn}`
    }
    obtenerPrecio() {
        super.obtenerPrecio();
        console.log('Y si esta disponible');
    }
}

const libro1 = new Libro('JavaScript la revolución', 120, 75348979);
const libro2 = new Libro('Sexology', 69, 69);

console.log(libro1);
console.log(libro2);
console.log(libro1.formatearProducto());
console.log(libro2.formatearProducto());
console.log(libro2.precioProducto());
console.log(libro2.obtenerPrecio());