// Variables
// Const 

// const es diferente a let y var
// a const no se le puede modificar el valor

const producto = "Audífonos Gamer"; // iniciar variable y asignarle valor
/*const producto = "Audífonos";*/ // no se puede reasignar un valor de una variable a const
/*producto = true;*/ // de esta forma tampoco funciona

console.log(producto)

/*const disponible;*/ // no se puede inicializar una variable const sin un valor
/*disponible = "si";*/ // asi que tampoco se le puede asignar el valor después.

// la única forma de modificar una variable const es cuando declaramos objetos con const
const adios = {
    mensaje: "adios",
    tiempos: 4
}

/*saludar1 = {
    palabras: "Hola",
    numero: "cinco"
}*/ // No se puede modificar de esta forma
console.log(adios.mensaje);
adios.mensaje = "dice Adios también";  // de esta forma si
console.log(adios.mensaje);

// Otra forma de iniciar variables
const producto1 = "Computadora",
    disponible1 = "true",
    categoria = "Computadoras";


function nuevaFuncion() {
    const hola = "hola"; //solo para este bloque
    console.log(hola);
}

/*console.log(hola);*/     //el valor de hola no va a estar disponible

// En este caso con const definimos una variable afuera de un bloque, y si lo modificamos dentro de un bloque, el cambio solo se aplicara a ese bloque y no afuera u otro bloque

const saludar = "hey, hola";
const tiempos = 4;

if (tiempos > 3) {
    const saludar = "dice Hola también";
    console.log(saludar); // dice: "dice Hola también"
}

console.log(saludar); // dice: "hey, hola"

// para guardar de forma correcta una variable no podemos iniciar con un número, símbolos y guiones medio.
// let 1hola = "hola";
// let -hola = "hola";

// Estilos para nombrar variables
const nombreProducto = "Monitor HD"; // Camelcase (el mas común y el que voy a usar)
const nombre_producto = "Monitor HD"; // Underscore
const NombreProducto = "Monitor HD"; // Pascal case
const nombreproducto = "Monitor HD"; // Over case