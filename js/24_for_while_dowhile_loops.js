// For loops
// Nos sirve en caso queramos imprimir varios numeros seguidos, usaremos menos código
console.log('For loops');

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

console.log('\n-----');

for (let i = 0; i <= 10; i++) {
    console.log(`${i} puntos`);
}

console.log('\n-----');

// Nos sirve para ver que numeros son pares e impares

for (i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} es par`);
    } else {
        console.log(`${i} es impar`);
    }
}

console.log('\n-----');

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

for (i = 0; i < carrito.length; i++) {
    console.log(`${i + 1} objetos en el carrito de compras`);
}

console.log('\n-----');

for (i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}

console.log('\n-----');

// While loop
// si la condición es verdadera el código se seguirá ejecutando, si no el código no se ejecuta
// a diferencia de FOR, el indice se inicializa antes y el incremento después
console.log('While loops');

/*let*/ i = 0; // indice

while (i <= 10) { //condición
    console.log(i);
    i++; // incremento
}

console.log('\n-----');

i = 0;

while (i <= 10) {
    if (i % 2 ===0) {
        console.log(`${i} es par`);
    } else {
        console.log(`${i} es impar`);
    }
    i++;
}

console.log('\n------');

i = 0;

while (i < carrito.length) {
    console.log(carrito[i].nombre);
    i++;
}

console.log('\n-----');

i = 0;

while (i <= carrito.length) {
    console.log(`${i + 1} objetos en el carrito de compras`);
    i++;
}

console.log('\n-----');

// Do while loop
// A diferencia de while loop, do while loop primero ejecuta el código y después evalúa si la condición es verdadera, si lo es se seguirá ejecutando, en caso contrario ya no ejecutara mas el código
console.log('Do while loops');

i = 0;
do {
    console.log(i);
    i++;
} while (i <= 10)