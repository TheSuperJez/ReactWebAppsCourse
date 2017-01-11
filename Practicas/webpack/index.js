window.$ = require('jquery');

function mostrarSaludo(){
    let nombre="Jorge";
    let mensaje=`Hola ${nombre}`;
    $('#mensaje').html(mensaje);
    alert(mensaje);

}

mostrarSaludo();