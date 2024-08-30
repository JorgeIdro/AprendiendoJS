// Destructuring de objetos

const producto = { // objeto
    nombreProducto: "Monitor 20 pulgadas", // propiedad
    precio: 300,
    disponible: true
}

// Guardar una propiedad de un objeto en una variable

// Forma anterior
const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto;

console.log(precioProducto);
console.log(nombreProducto);

// Destructuring
// Forma actual
// esta es la mejor forma sobre todo cuando quieres guardar varias propiedades de un mismo objeto en variables
// mientras que en el anterior se creaba la variable y se guardaba la propiedad, el destructuring lo crea y guarda (con el mismo nombre) en un solo paso 

const {precio, disponible} = producto; 

console.log(precio);
console.log(disponible);