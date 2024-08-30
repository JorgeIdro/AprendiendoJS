// Objetos
// En vez de crear muchas variables, podemos crear un objeto que contenga toda la información que tenga relación

const nombreProducto = "Monitor 20 pulgadas";
const precio = 300;
const disponible = true;

const producto = { // objeto
    nombreProducto: "Monitor 20 pulgadas", // propiedad
    precio: 300,
    disponible: true
}

console.log(producto); // imprime toda la información del objeto
console.log(producto.nombreProducto); // "Monitor 20 pulgadas"
console.log(producto.precio); // 300
console.log(producto.disponible); // true

// Otra sintaxis menos usada
console.log(producto["precio"]); // 300

// Agregar nuevas propiedad a un objeto
producto.imagen = "imagen.jpg";
console.log(producto); // sale la nueva propiedad en el objeto producto

// Eliminar propiedades
delete producto.imagen;
console.log(producto) // ya no sale la propiedad imagen