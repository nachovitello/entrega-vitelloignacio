const form = document.getElementById('consulta-form');
const nombreInput = document.getElementById('nombre');
const productoInput = document.getElementById('producto');
const vehiculoInput = document.getElementById('vehiculo');
const telefonoInput = document.getElementById('telefono');


form.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita que el formulario se envíe

  // Verifica si alguno de los campos está vacío
  if (nombreInput.value === '' || productoInput.value === '' || vehiculoInput.value === '' || telefonoInput.value === '') {
    alert('Por favor, complete todos los campos antes de enviar el formulario.');
  } else {
    // Crea un objeto JSON con los datos del formulario
    const consultaData = {
      nombre: nombreInput.value,
      producto: productoInput.value,
      vehiculo: vehiculoInput.value,
      telefono: telefonoInput.value
    };

    // Convierte el objeto JSON a una cadena
    const consultaDataString = JSON.stringify(consultaData);

    // Almacena los datos en el almacenamiento local
    localStorage.setItem('consultaData', consultaDataString);

    // Muestra una alerta de que los datos se enviaron correctamente
    alert('Datos enviados correctamente');

    // Limpia los campos del formulario
    nombreInput.value = '';
    productoInput.value = '';
    vehiculoInput.value = '';
    telefonoInput.value = '';
  }
});

// Función para mostrar los datos en el DOM
function displayConsultaData(data) {
  const outputElement = document.getElementById('output');

  outputElement.innerHTML = `
    <p>Nombre y Apellido: ${data.nombre}</p>
    <p>Producto: ${data.producto}</p>
    <p>Vehiculo: ${data.vehiculo}</p>
    <p>Telefono: ${data.telefono}</p>
  `;
}


