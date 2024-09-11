// ForEach y map son exclusivos de arreglos y se ejecutara repetidamente hasta que acabe con todos los elementos

const carrito = [ // Arreglo con objetos
    { nombre: 'Monitor de 20 pulgadas', precio: 500},
    { nombre: 'Televisor de 50 pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audífonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800}
];

// forEach sirve para imprimir en consola o html la información de los Arrays
carrito.forEach(producto => console.log(`Producto: ${producto.nombre}\nPrecio: ${producto.precio}`));

const array1 = carrito.forEach(producto => producto.nombre);
console.log(array1); // undefined

console.log();
// map sirve para crear nuevos arreglos sacando parte de la información del arreglo original
carrito.map(producto => console.log(`Producto: ${producto.nombre}\nPrecio: ${producto.precio}`));

const array2 = carrito.map(producto => producto.nombre);
console.log(array2); // muestra el nuevo array que solo tiene los nombres

const array3 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);
console.log(array3);