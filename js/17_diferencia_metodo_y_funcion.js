// Diferencia entre un método y una función

const numero1 = 10;
const numero2 = '20';

console.log(numero2);
console.log(numero1)
console.log('----');


// FUNCIÓN
// la estructura de una función es function() {}
// ParseInt es una función que convierte el numero de un string en tipo numero '1' -> 1
console.log(parseInt(numero2));

// MÉTODO
// el método va después de la variable
// .toString() es un método que convierte un numero o booleano a string 1 -> '1'
console.log(numero1.toString());