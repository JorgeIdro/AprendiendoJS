// Switch
// es mejor que else if debido que a la larga else if es difícil de mantener

const metodoPago = 'efectivo';

switch (metodoPago) {
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'cheque':
        console.log('El usuario va a pagar con un cheque, revisaremos si tiene los fondos necesarios');
        break;
    case 'efectivo':
        console.log('Pagaste con efectivo');
        break;
    default:
        console.log('Aún no has pagado');
        break;
}