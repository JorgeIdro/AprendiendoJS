// Variables
// existen 3 tipos de variables: var, let y const

// Var: fue el primero pero actualmente ya no es tan utilizado
// una vez que iniciemos una variable esta se podrá modificar con otro valor
// estará disponible para todo el proyecto si la iniciamos fuera de una función
// si la iniciamos dentro de una función solo esta disponible dentro de esa misma función

var producto = "Audífonos Gamer"; // iniciar variable y asignarle valor
var producto = "Audífonos"; // se puede reasignar el valor de la variable
producto = true; // también de esta forma

var disponible; // solo iniciar variable sin valor, para después darle un valor
disponible = "si";

// Otra forma de iniciar variables
var producto1 = "Computadora",
    disponible1 = "true",
    categoria = "Computadoras";


function nuevaFuncion() {
    var hola = "hola"; // solo para este bloque
    console.log(hola);
}

/*console.log(hola);*/     //el valor de hola no va a estar disponible

// el problema es que es modificable, si ya la guardamos en una variable y después, guardamos otra información en esa variable, el dato anterior de borrara

var saludar = "hey, hola";
var tiempos = 4;

if (tiempos > 3) {
    var saludar = "dice Hola también";
    console.log(saludar); // dice: "dice Hola también"
}

console.log(saludar); // dice: "dice Hola también"

// para guardar de forma correcta una variable no podemos iniciar con un número, símbolos y guiones medio.
// var 1hola = "hola";
// var -hola = "hola";

// Estilos para nombrar variables
var nombreProducto = "Monitor HD"; // Camelcase (el mas común y el que voy a usar)
var nombre_producto = "Monitor HD"; // Underscore
var NombreProducto = "Monitor HD"; // Pascal case
var nombreproducto = "Monitor HD"; // Over case