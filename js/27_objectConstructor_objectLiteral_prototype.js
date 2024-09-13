// POO : Programación Orientada a Objetos

/* Object literal */
const producto = {
    nombre: 'Tablet',
    precio: 500
}

/* Object Constructor */ // Forma anterior ya que no son clases como tal
// mas dinámico pero poco común
// en otros lenguajes seria class
function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

const producto2 = new Producto('Monitor curvo de 49"', 800, true);
const producto3 = new Producto('Laptop', 500, false);
const producto4 = new Producto('Celular', 600, true);
const cliente1 = new Cliente('Jorge', 'Idrovo')
// Podemos crear la cantidad de objetos que queramos

console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(cliente1);

// Formatear el Object Constructor
function formatearProducto (producto) {
    return `El producto ${producto.nombre} tiene un precio de $${producto.precio}`
}
console.log(formatearProducto(producto2));
console.log(formatearProducto(cliente1)); // no debería

/* Prototypes */
// Crea funciones que solo se utilizan en una función en especifico

Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de $${this.precio}`
}
console.log();
console.log(producto2.formatearProducto());

Cliente.prototype.formatearCliente = function() {
    return `El cliente ${this.nombre} ${this.apellido}`
}

console.log();
console.log(cliente1.formatearCliente());

// ahora en orden

function Reservacion(nombre, apellido, habitation, precio) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.habitation = habitation;
    this.precio = precio;
}

Reservacion.prototype.formatearReservacion = function() {
    return `El cliente ${this.nombre} ${this.apellido} reservo la habitación N° ${this.habitation} y de debe cancelar $${this.precio}`
}

const reservacion1 = new Reservacion('Jorge', 'Idrovo', 50, 500);
const reservacion2 = new Reservacion('Maestro', 'Roshi', 69, 50);

console.log();
console.log(reservacion1.formatearReservacion());
console.log(reservacion2.formatearReservacion());