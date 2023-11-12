const form = document.getElementById('consulta-form');
const nombreInput = document.getElementById('nombre');
const productoInput = document.getElementById('producto');
const vehiculoInput = document.getElementById('vehiculo');
const telefonoInput = document.getElementById('telefono');

form.addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevents the form from being submitted

  if (nombreInput.value === '' || productoInput.value === '' || vehiculoInput.value === '' || telefonoInput.value === '') {
    alert('Por favor, complete todos los campos antes de enviar el formulario.');
  } else {
    const consultaData = {
      nombre: nombreInput.value,
      producto: productoInput.value,
      vehiculo: vehiculoInput.value,
      telefono: telefonoInput.value
    };

    const consultaDataString = JSON.stringify(consultaData);

    // Using async/await here might not be necessary, but you can use it if needed for consistency
    await saveDataToLocalStorage(consultaDataString);

    alert('Datos enviados correctamente');

    // Clear the form fields
    nombreInput.value = '';
    productoInput.value = '';
    vehiculoInput.value = '';
    telefonoInput.value = '';
  }
});

// Function to save data to localStorage (you can make it async if needed)
function saveDataToLocalStorage(data) {
  return new Promise((resolve) => {
    localStorage.setItem('consultaData', data);
    resolve();
  });
}

// Function to display data in the DOM
function displayConsultaData(data) {
  const outputElement = document.getElementById('output');

  outputElement.innerHTML = `
    <p>Nombre y Apellido: ${data.nombre}</p>
    <p>Producto: ${data.producto}</p>
    <p>Vehiculo: ${data.vehiculo}</p>
    <p>Telefono: ${data.telefono}</p>
  `;
}

document.addEventListener('DOMContentLoaded', async function () {
  const storedDataString = localStorage.getItem('consultaData');

  if (storedDataString) {
    const storedData = JSON.parse(storedDataString);
    displayConsultaData(storedData);
  }
});
