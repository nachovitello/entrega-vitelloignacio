function enviarConsulta(event) {
  // Evita que el formulario se envíe de forma tradicional
  event.preventDefault();

  // Captura los datos del formulario
  const nombre = document.getElementById('nombre').value;
  const producto = document.getElementById('producto').value;
  const vehiculo = document.getElementById('vehiculo').value;
  const añoymotor = document.getElementById('añoymotor').value;

  // Define el número de WhatsApp (incluye el código de país sin el '+')
  const numeroWhatsApp = "5493514031305"; // Reemplaza con tu número

  // Construye el mensaje
  const mensaje = `Hola, mi nombre es ${nombre}. Quisiera consultar sobre el producto: ${producto}. Mi vehículo es ${vehiculo} y es ${añoymotor}.`;

  // Codifica el mensaje para la URL
  const mensajeCodificado = encodeURIComponent(mensaje);

  // Construye la URL de WhatsApp
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

  // Redirige al usuario a WhatsApp
  window.open(urlWhatsApp, '_blank');
}