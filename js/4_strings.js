// Strings o cadenas de texto

// Formas de escribir un String

const producto = "Monitor de 20 pulgadas"; // la mas usada // se puede usar comillas dobles o sencillas
const producto1 = String("Monitor de 30 pulgadas");
const producto2 = new String("Monitor de 40 pulgadas");

console.log(producto);
console.log(producto1);
console.log(producto2);

// typeof sirve para ver si una variable es un objeto, string, number ...
console.log(typeof producto); // string
console.log(typeof producto1); // string
console.log(typeof producto2); // objeto

// Para poder usar comillas dobles dentro de un string
let producto3 = "Monitor de 50 pulgadas\""; 
console.log(producto3);
producto3 = 'Monitor de 50 pulgadas"';
console.log(producto3);

// Métodos para string
//console.log es una función por el valor que agregamos en el paréntesis, pero al agregarle la una función se convierte en un método
console.log(producto3.length); //length nos dirá cuantos caracteres se uso en un string de una variable
// length es una propiedad, para que sea un método debe llevar un paréntesis al final

// Includes sirve para encontrar si existe una palabra en un string, si existe devuelve true, si no false
console.log(producto.includes("Monitor")); // true
console.log(producto.includes("hola")); //false


// indexOf sirve para encontrar la posición de una palabra o elemento en un string
console.log(producto.indexOf("de")); // comienza desde la posición 0, devuelve 8
console.log(producto3.indexOf("hola")); // devuelve -1 debido a que la palabra no existe en el string
