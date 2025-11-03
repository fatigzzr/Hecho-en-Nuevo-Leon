/**
 * emprendedor_app.js
 * Carga dinámicamente la información del emprendedor según el parámetro ID en la URL
 */

// Función para obtener parámetros de la URL
function obtenerParametroURL(parametro) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(parametro);
}

// Función para cargar la información del emprendedor
function cargarEmprendedor() {
  // Obtener el ID del emprendedor desde la URL
  const emprendedorId = obtenerParametroURL('id');

  // Si no hay ID, mostrar error
  if (!emprendedorId) {
    mostrarError();
    return;
  }

  // Obtener datos del emprendedor (desde data.js)
  const emprendedor = obtenerEmprendedor(emprendedorId);

  // Si no existe el emprendedor, mostrar error
  if (!emprendedor) {
    mostrarError();
    return;
  }

  // Cargar los datos en la página
  cargarInformacionBasica(emprendedor);
  cargarProductos(emprendedor.productos);
  cargarContacto(emprendedor);

  // Actualizar el título de la página
  document.title = `${emprendedor.nombre} - Hecho en Nuevo León`;
}

// Función para cargar información básica del emprendedor
function cargarInformacionBasica(emprendedor) {
  // Nombre
  document.getElementById('t-descripcion-emprendedor').textContent = emprendedor.nombre;
  // Logo
  const logoContacto = document.getElementById('logo-contacto');
  logoContacto.src = emprendedor.logo;
  logoContacto.alt = `Logo ${emprendedor.nombre}`;
  // También actualizar el logo que puede mostrarse en el header (si existe)
  const logoHeader = document.getElementById('logo-emprendedor');
  if (logoHeader) {
    logoHeader.src = emprendedor.logo;
    logoHeader.alt = `Logo ${emprendedor.nombre}`;
  }

  // Descripción
  document.getElementById('descripcion-texto').textContent = emprendedor.descripcion;
}

// Función para cargar productos del emprendedor
function cargarProductos(productos) {
  const listaProductos = document.getElementById('lista-productos');
  listaProductos.innerHTML = ''; // Limpiar lista

  if (!productos || productos.length === 0) {
    listaProductos.innerHTML = '<p>Este emprendedor aún no tiene productos registrados.</p>';
    return;
  }

  productos.forEach(producto => {
    const li = document.createElement('li');
    li.className = 'card';
    
    li.innerHTML = `
      <article>
        <a href="#" onclick="verDetalleProducto('${producto.id}'); return false;">
          <figure>
            <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">
          </figure>
          <h3>${producto.nombre}</h3>
          <p class="precio">$${producto.precio.toFixed(2)}</p>
          ${producto.descripcion ? `<p class="descripcion-corta">${producto.descripcion}</p>` : ''}
        </a>
      </article>
    `;
    
    listaProductos.appendChild(li);
  });
}

// Función para cargar información de contacto
function cargarContacto(emprendedor) {
  const contacto = emprendedor.contacto;

  // Logo en sección de contacto
  const logoContacto = document.getElementById('logo-contacto');
  logoContacto.src = emprendedor.logo;
  logoContacto.alt = `Logo ${emprendedor.nombre}`;

  // Instagram
  if (contacto.instagram) {
    const linkInstagram = document.getElementById('link-instagram');
    linkInstagram.href = `https://instagram.com/${contacto.instagram}`;
    linkInstagram.style.display = 'flex';
    document.getElementById('texto-instagram').textContent = contacto.instagram;
  }

  // Facebook
  if (contacto.facebook) {
    const linkFacebook = document.getElementById('link-facebook');
    linkFacebook.href = `https://facebook.com/${contacto.facebook}`;
    linkFacebook.style.display = 'flex';
    document.getElementById('texto-facebook').textContent = contacto.facebook;
  }
}

// Función para mostrar error
function mostrarError() {
  document.getElementById('main-emprendedor').style.display = 'none';
  document.getElementById('error-emprendedor').style.display = 'block';
}

// Función placeholder para ver detalle de producto (implementar después)
function verDetalleProducto(productoId) {
  console.log('Ver detalle del producto:', productoId);
  // Aquí podrías abrir un modal o redirigir a una página de producto
  alert('Funcionalidad de detalle de producto en desarrollo');
}

// Cargar emprendedor cuando la página termine de cargar
document.addEventListener('DOMContentLoaded', cargarEmprendedor);