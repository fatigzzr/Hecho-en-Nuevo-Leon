// Datos de categorías disponibles
const categorias = ['Salsas & Aderezos', 'Mieles', 'Licores', 'Dulces', 'Cacao & Snacks', 'Mermeladas', 'Tés', 'Comidas Preparadas'];

/**
 * Genera dinámicamente la lista de categorías en el navegador
 * Inserta cada categoría como un elemento <li> con clase 'categoria' dentro de #lista-categorias
 */
function generarCategorias() {
    const listaCategorias = document.getElementById('lista-categorias');
    
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

// Datos de productos de la categoria elegida - Cada producto incluye foto, nombre, marca y precio
const Salsas_y_Aderezos = [
    {
        foto: '../assets/images/productos/chimichurri somos sabores.png',
        nombre: 'Chimichurri',
        marca: 'Somos Sabores',
        precio: 65
    },
    {
        foto: '../assets/images/productos/salsa cambray.png',
        nombre: 'Salsa Cambray',
        marca: 'Los Cavazos',
        precio: 60
    },
    {
        foto: '../assets/images/productos/salsa de jamaica con morita somos sabores.png',
        nombre: 'Salsa de Jamaica con Morita',
        marca: 'Somos Sabores',
        precio: 65
    },
    {
        foto: '../assets/images/productos/salsa la machi chilito pikin.png',
        nombre: 'Salsa La Machi',
        marca: 'Chilito Pikin',
        precio: 75
    },
    {
        foto: '../assets/images/productos/salsa macha chilito pikin.png',
        nombre: 'Salsa Macha',
        marca: 'Chilito Pikin',
        precio: 75
    },
    {
        foto: '../assets/images/productos/salsa macha pikabite.png',
        nombre: 'Salsa Macha',
        marca: 'Pikabite',
        precio: 120
    },
    {
        foto: '../assets/images/productos/salsa verde cremosa chilito pikin.png',
        nombre: 'Salsa Verde Cremosa',
        marca: 'Chilito Pikin',
        precio: 55
    },
    {
        foto: '../assets/images/productos/sazonadores grill kong.png',
        nombre: 'Sazonador',
        marca: 'Grill Kong',
        precio: 190
    },
];

/**
 * Genera dinámicamente la lista de productos de la categoria seleccionada
 * Crea cards con estructura: <li.card> > <article> > <a> > (figure, h3, p, p)
 * Cada card muestra imagen, nombre, marca y precio formateado con $
 */
function generarSalsasYAderezos() {
    const listaProductosCategoria = document.getElementById('lista-productos-categoria');
    // Limpiar contenido previo
    listaProductosCategoria.innerHTML = '';

    Salsas_y_Aderezos.forEach(producto => {
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
        listaProductosCategoria.appendChild(li);
    });

    contarElementos(Salsas_y_Aderezos.length);

}

function contarElementos(cantidad) {
    const contador = document.getElementById('contador-productos');
    if (contador) {
        contador.textContent = `${cantidad} resultados`;
    }
}



/**
 * Inicialización - Ejecuta todas las funciones de generación cuando el DOM está listo
 * Orden de ejecución: categorías, productos de la categoria elegida
 */
document.addEventListener('DOMContentLoaded', () => {
    generarCategorias();
    generarSalsasYAderezos();
});