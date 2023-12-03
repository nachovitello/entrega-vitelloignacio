const form = document.getElementById('consulta-form');
  const nombreInput = document.getElementById('nombre');
  const productoInput = document.getElementById('producto');
  const vehiculoInput = document.getElementById('vehiculo');
  const telefonoInput = document.getElementById('telefono');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (nombreInput.value === '' || productoInput.value === '' || vehiculoInput.value === '' || telefonoInput.value === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, complete todos los campos antes de enviar el formulario.'
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        html: `
          <p>Datos enviados correctamente:</p>
          <ul>
            <li><strong>Nombre:</strong> ${nombreInput.value}</li>
            <li><strong>Producto:</strong> ${productoInput.value}</li>
            <li><strong>Vehículo:</strong> ${vehiculoInput.value}</li>
            <li><strong>Teléfono:</strong> ${telefonoInput.value}</li>
          </ul>
        `
      });

      // Limpiar los campos del formulario
      nombreInput.value = '';
      productoInput.value = '';
      vehiculoInput.value = '';
      telefonoInput.value = '';
    }
  });