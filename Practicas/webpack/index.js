require('./index.less');
window.$ = require('jquery');
//https://github.com/TheSuperJez/ReactWebAppsCourse

function mostrarSaludo(){
    let nombre="Jorge";
    let mensaje=`Hola ${nombre}`;
    $('#mensaje').html(mensaje);
    alert(mensaje);
}

mostrarSaludo();