  const productos = [{
    id: 1,
    radiador: "Palio",
    descripcion: "Radiador de palio 2011",
    imagen: "../multimedia/img/radiador_agua.jpg",
    precio: 59500,
    cantidad: 1
}, {
    id: 2,
    radiador: "Corsa",
    descripcion: "Radiador de corsa con aire",
    imagen: "../multimedia/img/radiador_corsa.webp",
    precio: 49600,
    cantidad: 1

}, {
    id: 3,
    radiador: "Radiador gol",
    descripcion: "Radiador de gol 2005 con aire",
    imagen: "../multimedia/img/radiador_golpower.webp",
    precio: 58000,
    cantidad: 1
}, {
    id: 4,
    radiador: "Radiador Gol Trend/Suran/Fox",
    descripcion: "Radiador de gol trend suran y fox",
    imagen: "../multimedia/img/radiador_goltrend.webp",
    precio: 56600,
    cantidad: 1
}, {
    id: 5,
    radiador: "Radiador Citroen c3",
    descripcion: "Radiador de citroen c3 nft y peugeot 208",
    imagen: "../multimedia/img/radiador_citroenc3.webp",
    precio: 74000,
    cantidad: 1
}, {
    id: 6,
    radiador: "Radiador Fiesta/Ecosport",
    descripcion: "Radiador Ford fiesta/ecosport",
    imagen: "../multimedia/img/radiador_ecosport.webp",
    precio: 75000,
    cantidad: 1
}];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
  const container = document.getElementById("contenedor-tarjetas");
  const tablaBody = document.getElementById("tablabody");
  const precioTexto = document.querySelector("#precio-texto");
  
  function renderizarProductos() {
    container.innerHTML = "";
    for (const producto of productos) {
      const productoradiador = document.createElement("div");
  
      productoradiador.innerHTML = `
        <div class="etiqueta-productos"> 
          <h3><strong>${producto.radiador}</strong></h3>
          <img class="imagen-tarjeta" src="${producto.imagen}">
          <div>
            <div class="contenido-texto">
              <p class="descripcion"> Descripción: ${producto.descripcion}</p>
              <p> <strong>Precio: $${producto.precio}</strong></p>
            </div>
            <div class="contenido-boton">
              <button type="button" class="btn btn-outline-warning" id="btnañadir${producto.id}">AGREGAR AL CARRITO</button>
            </div>
          </div>
        </div>`;
  
        container.appendChild(productoradiador);
  
        document.getElementById(`btnañadir${producto.id}`).addEventListener("click", () => {
          agregarAlCarrito(producto);
        });
      }
    }
  
    function agregarAlCarrito(productoNuevo) {
        let productoEncontrado = carrito.find(p => p.id == productoNuevo.id)
        let index = carrito.indexOf(productoEncontrado)
        if (index !== -1) {
            carrito[index].cantidad += 1
            actualizarCarrito()
            localStorage.setItem("carrito", JSON.stringify(carrito));
            document.querySelector("#precio-texto").innerText = (`
            Precio total: $ ${obtenerPrecioTotal()}`);
            Swal.fire({
                title: 'Ya está en tu carrito!',
                text: `se agregó una unidad más de ${productoNuevo.radiador} en tu carrito`,
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            })
            carrito.forEach(producto => {
                document.getElementById(`btnelim${producto.id}`).addEventListener("click", function () {
                    eliminarDelCarrito(producto.id);
                });
            });
        } else {
            carrito.push(productoNuevo);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Agregaste ${productoNuevo.radiador} al carrito!`,
                showConfirmButton: false,
                timer: 1500
              })
            sessionStorage.setItem("carrito", JSON.stringify(carrito));
            actualizarCarrito()
            document.querySelector("#precio-texto").innerText = (`
            Precio total: $${obtenerPrecioTotal()}`);
    
            carrito.forEach(producto => {
                document.getElementById(`btnelim${producto.id}`).addEventListener("click", function () {
                    eliminarDelCarrito(producto.id);
                });
            });
        }
    
        saveLocal();
        actualizarCarrito();
    
    }
  
    
  
  function saveLocal() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
  
  function actualizarCarrito() {
    tablaBody.innerHTML = "";
    for (const producto of carrito) {
      tablaBody.innerHTML += `
        <tr>
          <td>${producto.cantidad}</td>
          <td>${producto.radiador}</td>
          <td>$${producto.precio}</td>
          <td>$${producto.precio * producto.cantidad}</td>
          <td><button class="boton-eliminar-producto btn btn-outline-danger" type="button" id="btnelim${producto.id}"><i class="fa-solid fa-trash"></i></button></td>
        </tr>`;
    }
  
    for (const producto of carrito) {
      document.getElementById(`btnelim${producto.id}`).addEventListener("click", () => {
        eliminarDelCarrito(producto.id);
      });
    }
  
    precioTexto.innerText = `Precio total: $ ${obtenerPrecioTotal()}`;
  }
  
  function eliminarDelCarrito(id) {
    Swal.fire({
      title: "Estás seguro?",
      text: "Este producto se va a eliminar del carrito",
      icon: "warning",
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        carrito = carrito.filter((producto) => producto.id !== id);
        saveLocal();
        actualizarCarrito();
        Swal.fire("Listo!", "Este producto fue eliminado", "success");
      } else {
        Swal.fire("El producto no se eliminó");
      }
    });
  }
  
  function obtenerPrecioTotal() {
    return carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  }
  
  const confirmarCompra = () => {
    const botonComprar = document.getElementById("finalizar-compra");
    botonComprar.addEventListener("click", (event) => {
      event.preventDefault();
      if (carrito.length === 0) {
        Swal.fire({
          title: "No hay nada que comprar!",
          text: "Agregá productos a tu carrito",
          icon: "warning",
          confirmButtonText: "Aceptar",
        });
      } else {
        setTimeout(() => Swal.fire("Listo!", "Compra realizada con éxito", "success"), 1000);
        carrito = [];
        saveLocal();
        actualizarCarrito();
      }
    });
  };
  
  confirmarCompra();
  renderizarProductos();
  actualizarCarrito();