// Mas métodos de arrays

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']; // Arreglo plano

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

// ForEach
meses.forEach(function(mes) {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});

// Includes (una forma mas corta al código de arriba) devuelve true si la palabra existe o false si no existe 
// solo sirve para Arrays planos
let resultado = meses.includes('Marzo');
console.log(resultado); // true

// Some hace lo mismo que Includes pero sirve para arreglos con objetos
resultado = carrito.some(function(producto) {
    return producto.nombre === 'Celular';
});
console.log(resultado);

//una forma mas corta
resultado = carrito.some(producto => producto.nombre === 'Laptop');
console.log(resultado);

// Reduce (por si queremos sumar todos los precios de carrito)
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio;
}, 0); // Valor inicial
console.log(resultado);

resultado = carrito.reduce((total, producto) => total + producto.precio, 0); // Forma corta
console.log(resultado);

//Filter

resultado = carrito.filter(function(producto) {
    return producto.precio > 400; // filtrara todos los precios mayor a 400
});
console.log(resultado);

resultado = carrito.filter(function(producto) {
    return producto.nombre === 'Celular'; // Todos los que son 'Celular'
});
console.log(resultado);

resultado = carrito.filter(function(producto) {
    return producto.nombre !== 'Celular'; // Todos los que no son 'Celular'
});
console.log(resultado);

// NOTA
// = asignar un valor a = 1
// == comparar valores a = 1 b = 2 / a == b = false ||| a = 1 b = '1' / a == b = true
// == comparar valores de forma mas estricta a = '1' b = 1 / a === b = false