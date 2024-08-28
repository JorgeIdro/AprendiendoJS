// Concatenación y Template Strings

// Concatenación
// sirve para unir la información de dos variables, pero su sintaxis en antigua

const nombre = "Jorge";
const email = "correo@correo.com";

console.log(nombre);
console.log(email);


console.log(nombre + " " + email); // las comillas con espacio es para separar los dos strings al momento de imprimir en pantalla
console.log("Nombre: " + nombre + " Email: " + email);

// Template Strings
// es el reemplazo de la concatenación

console.log(`Nombre: ${nombre} Email: ${email}`);