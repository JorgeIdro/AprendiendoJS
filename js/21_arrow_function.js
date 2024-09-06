// Arrow functions
// Otra manera de declarar funciones

const sumar1 = (n1 = 0, n2 = 0) => {
    console.log(n1 + n2);
}
sumar1(1,4);

const sumar2 = (n1 = 0, n2 = 0) => console.log(n1 + n2); // Cuando es solo una linea no son necesarias las llaves

sumar2(4,5);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`); // Cuando solo es un parámetro no es necesario los paréntesis

aprendiendo('Javascript')

console.log('--------');

// Convirtiendo a Arrow function 

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
meses.forEach(mes => {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});

let resultado;

// Some hace lo mismo que Includes pero sirve para arreglos con objetos
resultado = carrito.some(producto => /*return*/ producto.nombre === 'Celular'); // En un arrow function ya noes necesario el return
console.log(resultado);

// Reduce (por si queremos sumar todos los precios de carrito)
resultado = carrito.reduce((total, producto) => total + producto.precio, 0); // Valor inicial
console.log(resultado);

//Filter

resultado = carrito.filter(producto => producto.precio > 400); // filtrara todos los precios mayor a 400
console.log(resultado);

resultado = carrito.filter(producto => producto.nombre === 'Celular'); // Todos los que son 'Celular'
console.log(resultado);

resultado = carrito.filter(producto => producto.nombre !== 'Celular'); // Todos los que no son 'Celular'
console.log(resultado);
