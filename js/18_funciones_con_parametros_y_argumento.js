// Funciones con parámetros y funciones


// parámetros por defecto x = 0 para que cuando se ingrese solo un numero no de NaN
function sumar(x = 0, y = 0) { // x, y son parámetros
    console.log(x + y);
}

sumar(10, 10); // Argumentos o valores reales
sumar(10, 5);
sumar(3, 7);
sumar(10, 30);
sumar(4); // si no se hubiera definido los parámetros por defecto a 0 el resultado seria NaN
sumar();

const sumar2 = function(n1 = 0, n2 = 0) {
    console.log(n1 + n2);
}

sumar2(4, 7);