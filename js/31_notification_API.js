// Notification API
// Es una API para crear notificaciones fuera de la pagina
// document hace referencia a todo el HTML
// querySelector es una función que nos permite seleccionar contenido HTML
// addEventListener va a registrar un evento

const button = document.querySelector('#button');
button.addEventListener('click', function() {
    Notification.requestPermission().then(resultado => console.log('El resultado es', resultado));
});

// Con la API Notification no es necesario resolve() y reject() ya que vienen por defecto

if (Notification.permission == 'granted') {
    const notification1 = new Notification('Esta es una notificación', { // Titulo de la notificación
        icon: 'img/1.jpg', // Imagen de lña notificación
        body: 'Mira este lindo paisaje' // Texto de la notificación
    })
    notification1.onclick = function () {
        window.open('https://unsplash.com/es/fotos/un-cuerpo-de-agua-rodeado-de-rocas-en-un-dia-nublado-iXseilSuq6A'); // Al momento de hacer click en la notificación el usuario sera redirigido a esta pagina
    }
}