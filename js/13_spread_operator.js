// Spread Operator sirve para unir dos objetos

const producto = { // objeto
    nombreProducto: 'Monitor 20 pulgadas', // propiedad
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1Kg',
    medida: '1m'
}

const nuevoProducto = {...producto, ...medidas}; // Unimos 2 o mas objetos sin modificar los originales
console.log(producto);
console.log(nuevoProducto);
console.log(medidas.peso);