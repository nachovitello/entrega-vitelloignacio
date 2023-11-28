const form = document.getElementById('consulta-form');
const nombreInput = document.getElementById('nombre');
const productoInput = document.getElementById('producto');
const vehiculoInput = document.getElementById('vehiculo');
const telefonoInput = document.getElementById('telefono');

form.addEventListener('submit', async function (event) {
  event.preventDefault(); 

  if (nombreInput.value === '' || productoInput.value === '' || vehiculoInput.value === '' || telefonoInput.value === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Por favor, complete todos los campos antes de enviar el formulario.'
    });
  } else {
    try {
      const consultaData = {
        Nombre: nombreInput.value,
        Producto: productoInput.value,
        Vehiculo: vehiculoInput.value,
        Telefono: telefonoInput.value
      };

      const queryParams = new URLSearchParams(consultaData).toString();

      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?${queryParams}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Hubo un problema al obtener los datos del servidor');
      }

      const responseData = await response.json();
      console.log('Datos del formulario:', responseData);

      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        html: `
          <p>Datos enviados correctamente:</p>
          <ul>
            <li><strong>Nombre:</strong> ${responseData.Nombre}</li>
            <li><strong>Producto:</strong> ${responseData.Producto}</li>
            <li><strong>Vehículo:</strong> ${responseData.Vehiculo}</li>
            <li><strong>Teléfono:</strong> ${responseData.Telefono}</li>
          </ul>
        `
      });

      
      nombreInput.value = '';
      productoInput.value = '';
      vehiculoInput.value = '';
      telefonoInput.value = '';
    } catch (error) {
      console.error('Hubo un error al obtener los datos del servidor:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al obtener los datos del servidor.'
      });
    }
  }
});
