// Estructuras de control if else

const puntaje = 1000;

if(puntaje == 1000) {
    console.log('El puntaje es 1000');
} else {
    console.log('Tu puntaje no es 1000');
}

console.log('-----');

const efectivo = 1000;
const carrito = 800;

if (efectivo >= carrito) {
    console.log('Fondos suficientes');
} else {
    console.log('Fondos insuficientes');
}

console.log('-----');

const rol = 'EDITOR';

if (rol === 'ADMINISTRADOR') {
    console.log('Tienes acceso al sistema como administrador');
} else if (rol === 'EDITOR') {
    console.log('Tienes acceso al sistema como editor')
} else {
    console.log('No tienes acceso al sistema');
}