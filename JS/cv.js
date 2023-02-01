$(document).ready(function(){
    //console.log("Documento Listo"); -> Prueba de que funciona JQuery

    //Guardar fichas de HTML en variables
    let datosPersonales = $('.DatosPersonales');
    let estudios = $('.Estudios');
    let conocimientos = $('.Conocimientos');
    datosPersonales.hide();
    estudios.hide();
    conocimientos.hide();

    //Animacion para mostrar fichas
    $('#icono1').click(function(event){ 
        datosPersonales.slideToggle(1500);
    });
    $('#icono2').click(function(event){ 
        estudios.slideToggle(1500);
    });
    $('#icono3').click(function(event){ 
        conocimientos.slideToggle(1500);
    });
});