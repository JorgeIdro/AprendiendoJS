// Try Catch
// Cuando existe un error en nuestro archivo de javascript este deja de ejecutarse
// Con try catch podemos probar código que podría causar problemas, asi si se presenta un error este no detenga la ejecución del archivo de javascript

const numero1 = 1;
// const numero2 = 2;
const numero3 = 3;

console.log(numero1);
// console.log(numero2);
try {
    console.log(numero2); // numero2 no esta definido
} catch (error) {
    console.log(error); // especifica el error
}
console.log(numero3); // a pesar del error el código sigue ejecutándose

// Podría utilizarse para un inicio de sección, en una conexión de base de datos o en una transferencia
