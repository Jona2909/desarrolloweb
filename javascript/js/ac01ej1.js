    // Función para detectar el navegador y mostrarlo en la consola
    function detectarNavegador() {
      var navegador;
      
      // Detectar Chrome
      if (navigator.userAgent.indexOf("Chrome") != -1 ) {
        navegador = "Google Chrome";
      }
      // Detectar Firefox
      else if (navigator.userAgent.indexOf("Firefox") != -1 ) {
        navegador = "Mozilla Firefox";
      }
      // Detectar Safari
      else if (navigator.userAgent.indexOf("Safari") != -1 ) {
        navegador = "Safari";
      }
      // Detectar Edge
      else if (navigator.userAgent.indexOf("Edg") != -1 ) {
        navegador = "Microsoft Edge";
      }
      // Detectar Internet Explorer
      else if (navigator.userAgent.indexOf("MSIE") != -1 ) {
        navegador = "Internet Explorer";
      }
      // Otros navegadores
      else {
        navegador = "navegador desconocido";
      }
      
      // Mostrar el nombre del navegador en la consola
      console.log("Estás utilizando el siguiente navegador: " + navegador);
    }
    
    // Llamar a la función para detectar y mostrar el navegador en la consola
    detectarNavegador();