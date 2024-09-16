// Promises
// Son funciones asíncronas cuyos resultados puede que estén de inmediato, luego o nunca, sea cual sea el resultado no detendrá la ejecución de javascript siendo muy beneficiosas

const usuarioAutenticado = new Promise((resolve, reject) => { // al no haber "this." se puede usar arrow function
    const auth = false;
    
    if (auth) {
        resolve('Usuario autenticado'); // El promise se cumple
    } else {
        reject('No se pudo iniciar sección'); // El promise no se cumple
    }
})
// resolve() y reject() son funciones

console.log(usuarioAutenticado);

// Existen 3 posibles valores de los promises
// fulfilled: se ha cumplido la promesa
// rejected: no se ha cumplido la promesa
// Pending: no se ha cumplido pero tampoco de ha rechazado la promesa
// Pending ocurre cuando no hemos puesto ifElse o otros factores dependiendo para que se use

// Para leer el mensaje del resolve() o reject()
usuarioAutenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))