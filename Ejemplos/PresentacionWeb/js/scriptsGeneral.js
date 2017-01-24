/*Jquery*/
$(document).ready(function () {
    $("#contenidoPrincipal").load("paginas/layoutHTML5.html");

    $('#layoutHTML5').click(function () {
        $("#contenidoPrincipal").load("paginas/layoutHTML5.html");
    });
    $('#textoHTML5').click(function () {
        $("#contenidoPrincipal").load("paginas/manejoTextoHTML5.html");
    });
    $('#bloqueLinea').click(function () {
        $("#contenidoPrincipal").load("paginas/bloqueLinea.html");
    });
    $('#meta').click(function () {
        $("#contenidoPrincipal").load("paginas/meta.html");
    });
    $('#multimedia').click(function () {
        $("#contenidoPrincipal").load("paginas/multimedia.html");
    });
    $('#formulario').click(function () {
        $("#contenidoPrincipal").load("paginas/formulario.html");
    });
    $('#formularioII').click(function () {
        $("#contenidoPrincipal").load("paginas/formularioII.html");
    });
    $('#formularioIII').click(function () {
        $("#contenidoPrincipal").load("paginas/formularioIII.html");
    });
    $('#graficos').click(function () {
        $("#contenidoPrincipal").load("paginas/graficos.html");
    });
    $('#geolocalizacion').click(function () {
        $("#contenidoPrincipal").load("paginas/geolocalizacion.html");
    });
    $('#dragDrop').click(function () {
        $("#contenidoPrincipal").load("paginas/dragDrop.html");
    });
    $('#storage').click(function () {
        $("#contenidoPrincipal").load("paginas/storage.html");
    });
    $('#cache').click(function () {
        $("#contenidoPrincipal").load("paginas/cache.html");
    });
    $('#worker').click(function () {
        $("#contenidoPrincipal").load("paginas/workers.html");
    });
     $('#sockets').click(function () {
        $("#contenidoPrincipal").load("paginas/sockets.html");
    });

});



/*Vanilla js*/