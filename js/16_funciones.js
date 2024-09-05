// Funciones
// Declaración de una función

// Javascript se ejecuta en dos etapas, 1 registro de funciones, 2 registro de llamadas a las funciones
/* sumar() */ // si reflejara el resultado de la función ya que es una función declarada
function sumar() {
    console.log(10 * 10);
}

sumar();

// Expresión de una función


/* sumar2()*/ // No reflejara el resultado debido a que la función esta guardada en una variable
const sumar2 = function() {
    console.log(3 + 3);
}

sumar2();

// IIFE
// En Javascript si creamos una variable en un archivo la podemos llamar desde otro y ver su información
// Con IIFE podemos guardar una variable que solo estará disponible en ese archivo de Javascript 
// También util si descargamos librerías que tengan variables que choquen con las ya creadas por ti
(function() {
    a = 1; // En otro archivo de Javascript a no tiene valor
})();

b = 1; // En otro archivo de Javascript b tiene valor 1