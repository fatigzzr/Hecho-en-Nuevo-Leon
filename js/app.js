// Datos de categorías disponibles
const categorias = ['Salsas & Aderezos', 'Mieles', 'Licores', 'Dulces', 'Cacao & Snacks', 'Mermeladas', 'Tés', 'Comidas Preparadas'];

/**
 * Genera dinámicamente la lista de categorías en el navegador
 * Inserta cada categoría como un elemento <li> con clase 'categoria' dentro de #lista-categorias
 */
function generarCategorias() {
    const listaCategorias = document.getElementById('lista-categorias');

    if (!listaCategorias) {
        console.info('generarCategorias: #lista-categorias no encontrado — se omite generación de categorías en esta página.');
        return;
    }

    // Limpiar contenido previo
    listaCategorias.innerHTML = '';

    // Crear un elemento <li> con enlace para cada categoría
    categorias.forEach(categoria => {
        const li = document.createElement('li');
        li.className = 'categoria';

        const a = document.createElement('a');
        a.href = '#';
        a.textContent = categoria;

        li.appendChild(a);
        listaCategorias.appendChild(li);
    });
}

// Productos destacados: obtenidos desde data.js mediante obtenerDestacados()

/**
 * Genera dinámicamente la lista de productos destacados
 * Crea cards con estructura: <li.card> > <article> > <a> > (figure, h3, p, p)
 * Cada card muestra imagen, nombre, marca y precio formateado con $
 */
function generarDestacados() {
    const listaProductos = document.getElementById('lista-productos');
    // Limpiar contenido previo
    listaProductos.innerHTML = '';

    const destacados = (typeof obtenerDestacados === 'function') ? obtenerDestacados() : [];
    destacados.forEach(producto => {
        const li = document.createElement('li');
        li.className = 'card';

        const article = document.createElement('article');

        const a = document.createElement('a');
        a.href = '#';

        // Imagen del producto
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.src = producto.foto;
        img.alt = producto.nombre;
        figure.appendChild(img);

        // Nombre del producto
        const nombre = document.createElement('h3');
        nombre.textContent = producto.nombre;

        // Marca del producto
        const marca = document.createElement('p');
        marca.textContent = producto.marca;

        // Precio formateado con símbolo de peso
        const precio = document.createElement('p');
        precio.textContent = `$${producto.precio}`;

        // Construir estructura DOM: a > (figure, h3, p, p)
        a.appendChild(figure);
        a.appendChild(nombre);
        a.appendChild(marca);
        a.appendChild(precio);
        
        article.appendChild(a);
        li.appendChild(article);
        listaProductos.appendChild(li);
    });
}

// Emprendedores: usar la fuente centralizada en data.js

/**
 * Genera dinámicamente la lista de emprendedores
 * Crea cards con estructura: <li.card> > <article> > <a> > (figure, h3, p)
 * Layout en mobile: grid con imagen a la izquierda, nombre y descripción a la derecha
 */
function generarEmprendedores() {
    const listaEmprendedores = document.getElementById('lista-emprendedores');
    // Limpiar contenido previo
    listaEmprendedores.innerHTML = '';

    const emprendedores = (typeof obtenerTodosEmprendedores === 'function') ? obtenerTodosEmprendedores() : [];
    emprendedores.forEach(emprendedor => {
        const li = document.createElement('li');
        li.className = 'card';

        const article = document.createElement('article');
        
        const a = document.createElement('a');
        a.href = `emprendedor.html?id=${emprendedor.id}`;

        // Imagen del emprendedor
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        // soportar ambos formatos: 'foto' (antes) o 'logo' (data centralizada)
        img.src = emprendedor.foto || emprendedor.logo || '../assets/icons/hecho-en-nl.svg';
        img.alt = emprendedor.nombre;
        figure.appendChild(img);
        // fallback si no carga la imagen
        img.onerror = function() {
            this.onerror = null;
            this.src = '../assets/icons/hecho-en-nl.svg';
        };

        // Nombre del emprendedor
        const nombre = document.createElement('h3');
        nombre.textContent = emprendedor.nombre;

        // Descripción de productos del emprendedor
        const descripcion = document.createElement('p');
        descripcion.textContent = emprendedor.descripcion;

        // Construir estructura DOM: a > (figure, h3, p)
        a.appendChild(figure);
        a.appendChild(nombre);
        a.appendChild(descripcion);

        article.appendChild(a);
        li.appendChild(article);
        listaEmprendedores.appendChild(li);
     });
}

// Datos de canastas - Cada canasta incluye foto, nombre y precio
// Canastas: usar data centralizada desde data.js

/**
 * Genera dinámicamente la lista de canastas
 * Crea cards con estructura: <li.card> > <article> > <a> > (figure, h3, p)
 * Similar a productos destacados pero sin marca (solo nombre y precio)
 */
function generarCanastas() {
    const listaCanastas = document.getElementById('lista-canastas');
    // Limpiar contenido previo
    listaCanastas.innerHTML = '';

    const canastas = (typeof obtenerCanastas === 'function') ? obtenerCanastas() : [];
    canastas.forEach(canasta => {
        const li = document.createElement('li');
        li.className = 'card';

        const article = document.createElement('article');

        const a = document.createElement('a');
        a.href = '#';

        // Imagen de la canasta
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.src = canasta.foto;
        img.alt = canasta.nombre;
        figure.appendChild(img);

        // Nombre de la canasta
        const nombre = document.createElement('h3');
        nombre.textContent = canasta.nombre;

        // Precio formateado con símbolo de peso
        const precio = document.createElement('p');
        precio.textContent = `$${canasta.precio}`;

        // Construir estructura DOM: a > (figure, h3, p)
        a.appendChild(figure);
        a.appendChild(nombre);
        a.appendChild(precio);

        article.appendChild(a);
        li.appendChild(article);
        listaCanastas.appendChild(li);
    });
}

/**
 * Inicialización - Ejecuta todas las funciones de generación cuando el DOM está listo
 * Orden de ejecución: categorías, productos destacados, emprendedores, canastas
 */
document.addEventListener('DOMContentLoaded', () => {
    try {
        if (document.getElementById('lista-categorias')) {
            generarCategorias();
        } else {
            console.info('init: #lista-categorias no presente — generarCategorias() omitido');
        }

        if (document.getElementById('lista-productos')) {
            generarDestacados();
        }

        if (document.getElementById('lista-emprendedores')) {
            generarEmprendedores();
        }

        if (document.getElementById('lista-canastas')) {
            generarCanastas();
        }
    } catch (err) {
        console.error('Error iniciando generadores en app.js:', err);
    }
});