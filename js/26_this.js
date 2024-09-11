// This 
// hace referencia a los mismos valores del objeto que se esta llamando
// un ejemplo, dentro de un objeto creamos una función que imprime toda la informacion del mismo objeto en el que esta, pero para acceder a ea informacion debemos utilizar this.nombre
// también nos evita errores por objetos con nombres parecidos

const reservacion = {
    nombre: 'Jorge',
    apellido: 'Idrovo',
    total: 5000,
    pagado: false,
    informacion: function() { // arrow function hace referencia a la ventana global, no sirve en este caso
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es ${this.total}`); // aquí aplicamos this
    }
}

const reservacion2 = {
    nombre: 'Naranjito',
    apellido: 'Limonagrio',
    total: 7000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es ${this.total}`); // se evita la confusion de nombres de objetos parecidos
    }
}

reservacion.informacion();
reservacion2.informacion();