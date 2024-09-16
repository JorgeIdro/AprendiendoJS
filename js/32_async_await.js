// Async / Await
// “async” va antes de una función para decir que es asíncrona y la palabra “await” pausa la ejecución de la función a la espera de que se obtengan todos los datos y siempre debe estar dentro de la función async.

function descargarNuevosClientes () {
    return new Promise (resolve => {
        console.log('Descargar nuevos clientes .......');

        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 7000);
    })
}

setTimeout( function() {
 console.log('set timeout ...');
}, 5000) // Este código se ejecutara en 5 segundos

// setInterval son intervalos

async function app() {
    try {
        console.log('Este código no se bloquea'); // Este código si se mostrara ya que esa antes de await
        const resultado = await descargarNuevosClientes(); // await = esperar
        console.log('Este código si se bloquea'); // Este código no se mostrara hasta que "await" se complete
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

app();

console.log('Este código no se bloquea');