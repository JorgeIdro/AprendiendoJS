// Métodos de propiedad

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el ID: ${id}`);
    },
    pausar: function() {
        console.log('Música en pausa');
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando Playlist con el nombre: ${nombre}`)
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo Playlist con el nombre: ${nombre}`)
    }
}

// Agregando una propiedad desde fuera de objeto
reproductor.eliminarCancion = function(id) {
    console.log(`Eliminando la canción con el ID: ${id}`);
}
reproductor.reproducir(3840);
reproductor.pausar();
reproductor.eliminarCancion(3680);
reproductor.crearPlaylist('Rock');
reproductor.reproducirPlaylist('Rock');