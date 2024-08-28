// Booleans
// Los booleanos son true y false

const boolean1 = true;
const boolean2 = false;
const boolean3 = "true"; // ya no es un booleano

console.log(boolean1); // true
console.log(typeof boolean1); // boolean
console.log(boolean2); // false
console.log(typeof boolean2); // boolean
console.log(boolean3); // "true"
console.log(typeof boolean3); // string

// boolean con un constructor (ya no es usado)

const boolean4 = new Boolean(true);
console.log(boolean4); // true
console.log(typeof boolean4); // es un objeto