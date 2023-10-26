# Página de Repuestos

Bienvenido a la Página de Repuestos. Este proyecto es una plataforma en línea dedicada a la venta y consulta de repuestos para vehículos. Los usuarios pueden buscar repuestos, obtener información sobre productos y enviar consultas a través de un formulario en el pie de la página.

## Último Cambio

El último cambio realizado en esta página consistió en la implementación de JSON Storage y la manipulación del DOM en el formulario de consultas. A continuación, se detalla esta mejora:

### Formulario de Consultas

Hemos mejorado la funcionalidad del formulario de consultas que se encuentra en el pie de la página. Los cambios realizados permiten lo siguiente:

- **JSON Storage:** Ahora, cuando los usuarios envían una consulta a través del formulario, los datos ingresados se almacenan en formato JSON en el almacenamiento local del navegador. Esto garantiza que los datos enviados permanezcan disponibles en futuras visitas a la página, incluso después de cerrar el navegador.

- **DOM (Document Object Model):** También hemos mejorado la interacción del formulario con el DOM. Cuando los usuarios envían una consulta, se muestra una alerta de confirmación que indica que los datos se enviaron correctamente. Además, los campos del formulario se limpian automáticamente para facilitar el ingreso de nuevas consultas.


