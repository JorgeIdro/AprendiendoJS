// Variables
// let

// Let es similar a var

let producto = "Audífonos Gamer"; // iniciar variable y asignarle valor
/*let producto = "Audífonos";*/ // no se puede reasignar un valor de una variable de esta forma
producto = true; // de esta forma si se puede reasignare el valor de la variable

let disponible; // solo iniciar variable sin valor, para después darle un valor
disponible = "si";

// Otra forma de iniciar variables
let producto1 = "Computadora",
    disponible1 = "true",
    categoria = "Computadoras";


function nuevaFuncion() {
    let hola = "hola"; //solo para este bloque
    console.log(hola);
}

/*console.log(hola);*/     //el valor de hola no va a estar disponible

// En este caso con let definimos una variable afuera de un bloque, y si lo modificamos dentro de un bloque, el cambio solo se aplicara a ese bloque y no afuera u otro bloque

let saludar = "hey, hola";
let tiempos = 4;

if (tiempos > 3) {
    let saludar = "dice Hola también";
    console.log(saludar); // dice: "dice Hola también"
}

console.log(saludar); // dice: "hey, hola"

// para guardar de forma correcta una variable no podemos iniciar con un número, símbolos y guiones medio.
// let 1hola = "hola";
// let -hola = "hola";

// Estilos para nombrar variables
let nombreProducto = "Monitor HD"; // Camelcase (el mas común y el que voy a usar)
let nombre_producto = "Monitor HD"; // Underscore
let NombreProducto = "Monitor HD"; // Pascal case
let nombreproducto = "Monitor HD"; // Over case