(function ($) {
    //Definicion del plugin
    $.extend($.fn, {
        ValidarObligatorio: function () {
            return this.each(function () {
                 //validar si el campo está vacio
                var vacio = this.value.trim() === "";
                //pasar 'this' a objeto JQuery
                var campo = $(this);
                 /*Añadir y quitar clase 'campoObligatorio' 
                 dependiendo si el valor del campo está vacío */
                campo.toggleClass('campoObligatorio',vacio);
                /*También agregar/quitar clase al nodo previo 
                inmediato (etiqueta 'span') */
                campo.prev().toggleClass('campoObligatorio',vacio);
            });
        } //fin de la funcion
    });//fin de extend
}(jQuery)); 