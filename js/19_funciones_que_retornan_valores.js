// Funciones que retornan valores

function sumar(n1 = 0, n2 = 0) {
    return n1 + n2; // para que retorne el valor es necesario que el argumento se guarde en una variable
}

const resultado = sumar(2,1);

console.log(resultado);

//----

let total = 0;

function agregarCarrito(precio) {
    return total += precio; // incremento
}

function calcularImpuesto(total) {
    return 1.15 * total;
}

total = agregarCarrito(400);
total = agregarCarrito(700);
total = agregarCarrito(300);
console.log(total);

const totalAPagar = calcularImpuesto(total);
console.log(`El total a pagar con impuestos es de: $${totalAPagar}`);