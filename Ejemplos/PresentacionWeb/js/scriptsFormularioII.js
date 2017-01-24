/*Jquery*/
$(document).ready(function () {
    $('#max95').change(function () {
        $('#resultMax95').val($(this).val());
    });
    $('#rango').change(function () {
        $('#resultRango').val($(this).val());
    });
});