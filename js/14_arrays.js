// Arrays y arreglos para almacenar datos

const numeros = [10,20,30,40,50];

console.log(numeros);
console.table(numeros); // Te lo muestra en una tabla

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']

console.table(meses);

const arreglo = ['Messi', 10, true, 'GOAT', null, {nombre: 'Lionel', trabajo: 'Futbolista'}, [1,2,3]]; // todo lo que se puede guardar dentro de un Array

console.log(arreglo);
console.table(arreglo);

// Acceder a los valores de un arreglo

console.log(arreglo[0]);
console.log(arreglo[3]);
console.log(arreglo[200]);

// Conocer la extension de un arreglo

const nada = [];

console.log(arreglo.length);
console.log(nada.length);

// forEach (iterador)

meses.forEach( function(numeros) { // Imprime todos los elementos de un arreglo uno por uno
    console.log(numeros);
})

console.log('----');

// Añadir y/o modificar mas elementos a un Array

numeros[5] = 60; // si lo ponemos en una posición que no había ningún dato lo agrega al array
// pero si ea posición ya existía lo modificara por el nuevo valor
console.log(numeros);
// no es un método muy usado 

// Push, agrega un nuevo elemento a un array en la ultima posición

numeros.push(70,80);
console.log(numeros);

// Unshift, agrega nuevos elementos al inicia de un array

numeros.unshift(-20,-10,0);
console.log(numeros);

// Eliminar elementos de un arreglo

const años = [2000,2001,2002,2003,2004];
console.log(años);

// Pop eliminara el ultimo elemento de un array

años.pop();
console.log(años);

// Shift eliminara el primer elemento de un array

años.shift();
console.log(años);

// Splice eliminara el elemento según la ubicación que tenga en el array

años.splice(1, 1) // eliminara al elemento en la posición uno, y solo un elemento a partir de ahi
console.log(años);

// Rest Operator o Spread Operator
// los métodos anteriores nos ayudan mucho, pero la desventaja es que se modifica el arreglo original
// pero con este enfoque creamos una copia del arreglo original

const numeros2 = [1,2,3,4,5];
console.log(numeros2);

const nuevoArreglo = [0, ...numeros2, 6]; // creamos una copia y a la vez agregamos mas elementos al inicio y al final del array
console.log(nuevoArreglo);