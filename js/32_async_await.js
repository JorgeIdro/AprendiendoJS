// Async / Await
// “async” va antes de una función para decir que es asíncrona y la palabra “await” pausa la ejecución de la función a la espera de que se obtengan todos los datos y siempre debe estar dentro de la función async.

function descargarNuevosClientes () {
    return new Promise (resolve => {
        console.log('Descargar nuevos clientes .......');

        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    })
}

function descargarUltimosPedidos () {
    return new Promise (resolve => {
        console.log('Descargar últimos pedidos .......');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados');
        }, 7000);
    })
}

setTimeout( function() {
 console.log('set timeout ...');
}, 5000) // Este código se ejecutara en 5 segundos

// setInterval son intervalos

/*
async function app() {
    try {
        console.log('Este código no se bloquea'); // Este código si se mostrara ya que esa antes de await
        const cliente = await descargarNuevosClientes(); // await = esperar
        const pedidos = await descargarUltimosPedidos();
        console.log('Este código si se bloquea'); // Este código no se mostrara hasta que "await" se complete
        console.log(cliente);
        console.log(pedidos);
    } catch (error) {
        console.log(error);
    }
}

app();
console.log('Este código no se bloquea');
*/

// Dos consultas Async Await
// El problema es que primero se ejecutara "resultado" y luego "pedidos" debido a que hay dos awaits, los solucionamos con el siguiente código

async function app2() {
    try {
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]); // se aplica el await para las dos funciones en una misma linea de código
        console.log(resultado[0]); // para que imprima el resolve() y no todo el arreglo
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app2();