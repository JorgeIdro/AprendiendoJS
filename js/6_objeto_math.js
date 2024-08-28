// Objeto Math

let resultado = Math.PI; //pi
console.log(resultado); //3.141592653589793

resultado = Math.round(2.2); // redondea normal 2.1= 2, 2.5= 3, 2.9= 3
console.log(resultado); //2

resultado = Math.ceil(2.2); // redondea hacia arriba 2.1= 3, 2.5= 3, 2.9= 3
console.log(resultado); //3

resultado = Math.floor(2.2); // redondea hacia abajo 2.1= 2, 2.5= 2, 2.9=2
console.log(resultado);

resultado = Math.sqrt(144); // raíz cuadrada
console.log(resultado); //12

resultado = Math.min(1, 2, 5, 100, 3); // busca el numero menor
console.log(resultado); //1

resultado = Math.max(1, 2, 5, 100, 3); // busca el numero mayor
console.log(resultado); //100

resultado = Math.random(); // números aleatorios (solo 0 con decimales)
console.log(resultado);

resultado = Math.floor(Math.random() * 100); // números aleatorios hasta 100
console.log(resultado);

// Objeto math tiene muchas mas funciones