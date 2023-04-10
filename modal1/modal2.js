$(document).ready(function() {
    $("#mi-modal").dialog({
      autoOpen: false,
      modal: true,
      buttons: {
        "Enviar": function() {
          // Obtener los valores de los campos de entrada
          var nombre = $("#nombre").val();
          var email = $("#email").val();
          // Hacer algo con los valores (por ejemplo, enviarlos a un servidor)
          alert("Nombre: " + nombre + "\nEmail: " + email);
          // Cerrar el modal
          $(this).dialog("close");
        },
        "Cancelar": function() {
          // Cerrar el modal
          $(this).dialog("close");
        }
      }
    });
    
    $("#modal-boton").on("click", function() {
      $("#mi-modal").dialog("open");
    });
  });