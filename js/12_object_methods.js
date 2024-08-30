"use strict"// hace que javascript se ejecute de forma estricta
// Object methods

const producto = { // objeto
    nombreProducto: "Monitor 20 pulgadas", // propiedad
    precio: 300,
    disponible: true
}

// Object freeze
// un objeto de puede modificar sin importar si la iniciamos con const, con freeze podemos congelar el objeto para que no sea modificable
// no permite modificar, agregar ni eliminar
Object.freeze(producto);

/*producto.imagen = 'imagen.jpg';*/ // en modo estricto marca error debido a que no se puede agregar mas propiedades debido a que el objeto esta congelado

console.log(producto);

// con isFrozen podremos saber si un objeto esta congelado o no

console.log(Object.isFrozen(producto)); // Devuelve true

// Object seal
// es parecido a freeze
// no permite agregar ni eliminar pero su permite modificar

const producto2 = { // objeto
    nombreProducto: "Monitor 30 pulgadas", // propiedad
    precio: 500,
    disponible: true
}

Object.seal(producto2);

producto2.precio = 400; // se modifica el precio del objeto producto2

console.log(producto2);
console.log(Object.isSealed(producto2));