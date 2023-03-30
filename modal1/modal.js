$(document).ready(function() {
    $("#mi-modal").dialog({
      autoOpen: false,
      modal: true,
      buttons: {
        "Cerrar": function() {
          $(this).dialog("close");
        }
      }
    });
    
    $("#abrir-modal").on("click", function() {
      $("#mi-modal").dialog("open");
    });
  });