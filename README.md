# Hecho-en-Nuevo-Leon
Proyecto final de la asignatura de Desarrollo Web. El objetivo es diseñar y programar la base visual de un catálogo web que reúna productos de diferentes emprendedores locales (Hecho en NL).

## Catálogo (index.html)

El archivo `index.html` contiene el catálogo principal que muestra productos y emprendedores locales. El catálogo incluye:

- **Header**: Barra superior con el logo del Gobierno de Nuevo León, título "Hecho en Nuevo León" y una barra de búsqueda para productos.
- **Navegación**: Menú horizontal con categorías de productos (Salsas & Aderezos, Mieles, Licores, Dulces, Cacao & Snacks, Mermeladas, Tés, Comidas Preparadas).
- **Productos Destacados**: Sección que muestra una selección de productos destacados con imagen, nombre, marca y precio.
- **Emprendedores**: Sección que presenta información sobre los emprendedores locales.
- **Canastas**: Sección para mostrar canastas de productos disponibles.
- **Footer**: Pie de página con los logos oficiales, información de contacto (teléfono y correo electrónico).

## Diseño Responsive

El proyecto utiliza un enfoque **mobile-first**, optimizado para dispositivos móviles y adaptado para pantallas más grandes mediante media queries.

### Características de Diseño

- **Mobile First**: Diseño optimizado inicialmente para dispositivos móviles.
- **Media Queries Desktop (1024px+)**: 
  - Header reorganizado en una sola fila (logo, título y búsqueda).
  - Navegación sticky que permanece visible al hacer scroll.
  - Categorías con iconos de flecha y menús desplegables al hover.
  - Layout de dos columnas para emprendedores y canastas.
  - Productos y canastas en grid responsivo.
  - Footer reorganizado en fila para mejor uso del espacio.