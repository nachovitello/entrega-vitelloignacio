  const texto = "MAS DE 45 AÑOS DE TRAYECTORIA";
  const velocidadEscritura = 100; // Milisegundos por letra
  const velocidadBorrado = 50; // Milisegundos por letra
  const pausaAntesBorrar = 2000; // Pausa antes de borrar (en ms)

  const subtitulo = document.querySelector(".subtitulo");

  let index = 0;
  let escribiendo = true;

  function maquinaDeEscribir() {
    if (escribiendo) {
      subtitulo.textContent = texto.slice(0, index++);
      subtitulo.classList.add("typing");

      if (index > texto.length) {
        escribiendo = false;
        setTimeout(maquinaDeEscribir, pausaAntesBorrar); // Pausa antes de borrar
      } else {
        setTimeout(maquinaDeEscribir, velocidadEscritura); // Continúa escribiendo
      }
    } else {
      subtitulo.textContent = texto.slice(0, index--);
      subtitulo.classList.add("erasing");

      if (index < 0) {
        escribiendo = true;
        setTimeout(maquinaDeEscribir, velocidadEscritura); // Reinicia la escritura
      } else {
        setTimeout(maquinaDeEscribir, velocidadBorrado); // Continúa borrando
      }
    }
  }

  // Inicia el efecto
  maquinaDeEscribir();