// Fetch API
// es una API de JavaScript que permite hacer peticiones HTTP para obtener recursos de forma asíncrona desde un servidor o de forma local
// va conectado con empleados.json


function obtenerEmpleados() {
    const archivoEmpleados = 'js/empleados.json'; // ruta del archivo .json
    fetch(archivoEmpleados) // extrayendo datos del "servidor"
        .then(resultado => resultado.json()) // para que identifique que el resultado es un archivo .json
        .then(datos => { // accedemos a los datos
            // console.log(datos.empleados);
            const { empleados } = datos; // destructuring, extraemos los valores y lo guardamos en un mismo paso
            console.log(empleados);
            empleados.forEach(empleados => { // forEach itera el arreglo de empleados
                console.log(empleados);
                console.log(empleados.id);
                console.log(empleados.nombre);
                console.log(empleados.puesto);
                
                // document.querySelector('.contenido').textContent += empleados.nombre;
                // Una forma de imprimir los datos en el HTML
            });
            console.log();
        });
}
obtenerEmpleados();

// Ahora con Async Await

async function obtenerEmpleados2() {
    const archivoEmpleados = 'js/empleados.json'; // ruta del archivo .json
    const resultadoEmpleados = await fetch(archivoEmpleados); // extrayendo datos del "servidor"
    const datosEmpleados = await resultadoEmpleados.json(); // se especifica que es un archivo .json
    // esta vez no se uso promise.all, debido a que esta linea de código depende del primero
    const {empleados} = datosEmpleados; // destructuring
    console.log(empleados);
    empleados.forEach(empleados => { // forEach itera el arreglo de empleados
        console.log(empleados);
        console.log(empleados.id);
        console.log(empleados.nombre);
        console.log(empleados.puesto);
    })
}
obtenerEmpleados2();