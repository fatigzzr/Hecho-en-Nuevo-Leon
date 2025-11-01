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

// Datos de productos destacados - Cada producto incluye foto, nombre, marca y precio
const destacados = [
    {
        foto: '../assets/images/productos/chimichurri somos sabores.png',
        nombre: 'Chimichurri',
        marca: 'Somos Sabores',
        precio: 65
    },
    {
        foto: '../assets/images/productos/7 azhares te manos nativas.png',
        nombre: '7 Azahres Té',
        marca: 'Manos Nativas',
        precio: 50
    },
    {
        foto: '../assets/images/productos/cacao garapiñado olartesanal.png',
        nombre: 'Cacao Garapiñado',
        marca: 'Olartesanal',
        precio: 50
    },
    {
        foto: '../assets/images/productos/salsa verde cremosa chilito pikin.png',
        nombre: 'Salsa Verde Cremosa',
        marca: 'La compita - Chilito Pikin',
        precio: 55
    },
    {
        foto: '../assets/images/productos/miel abellamia.png',
        nombre: 'Miel',
        marca: 'Abellamia',
        precio: 79
    },
];

/**
 * Genera dinámicamente la lista de productos destacados
 * Crea cards con estructura: <li.card> > <article> > <a> > (figure, h3, p, p)
 * Cada card muestra imagen, nombre, marca y precio formateado con $
 */
function generarDestacados() {
    const listaProductos = document.getElementById('lista-productos');
    // Limpiar contenido previo
    listaProductos.innerHTML = '';

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

// Datos de emprendedores - Cada emprendedor incluye foto, nombre y descripción de productos
const emprendedores = [
    {
        foto: '../assets/images/emprendedores/somos sabores.jpeg',
        nombre: 'Somos Sabores',
        descripcion: 'Chimichurri, Salsa de Jamaica'
    },
    {
        foto: '../assets/images/emprendedores/del huerto de santiago.jpg',
        nombre: 'Del Huerto de Santiago',
        descripcion: 'Licor de Manzana'
    },
    {
        foto: '../assets/images/emprendedores/abellamia.png',
        nombre: 'Abellamia',
        descripcion: 'Miel'
    },
    {
        foto: '../assets/images/emprendedores/chilito pikin.jpg',
        nombre: 'Chilito Pikin',
        descripcion: 'Salsas (Macha, Verde, La Machi)'
    },
    {
        foto: '../assets/images/emprendedores/los cavazos.jpg',
        nombre: 'Los cavazos',
        descripcion: 'Salsa Cambray'
    },
    {
        foto: '../assets/images/emprendedores/dulces finos victoria.jpg',
        nombre: 'Dulces finos Victoria',
        descripcion: 'Rollo de Guayaba, Glorias'
    },
    {
        foto: '../assets/images/emprendedores/olartesanal.png',
        nombre: 'Olartesanal',
        descripcion: 'Cacao Garapiñado'
    },
    {
        foto: '../assets/images/emprendedores/la monita.png',
        nombre: 'La monita',
        descripcion: 'Miel, chorizos, empanadas, conservas'
    },
    {
        foto: '../assets/images/emprendedores/masedi de la cosecha a tu mesa.jpeg',
        nombre: 'MASEDI de la cosecha a tu mesa',
        descripcion: 'Mermelada'
    },
    {
        foto: '../assets/images/emprendedores/linaje de perros.jpeg',
        nombre: 'Linaje de Perro',
        descripcion: 'Destilado de agave'
    },
    {
        foto: '../assets/images/emprendedores/manosnativas.jpg',
        nombre: 'Manos Nativas',
        descripcion: 'Té "7 Azahares"'
    },
    {
        foto: '../assets/images/emprendedores/grill kong.jpeg',
        nombre: 'Grill Kong',
        descripcion: 'Sazonadores'
    },
    {
        foto: '../assets/images/emprendedores/pikabite.jpg',
        nombre: 'Pikabite',
        descripcion: 'Salsa Macha'
    }
]

/**
 * Genera dinámicamente la lista de emprendedores
 * Crea cards con estructura: <li.card> > <article> > <a> > (figure, h3, p)
 * Layout en mobile: grid con imagen a la izquierda, nombre y descripción a la derecha
 */
function generarEmprendedores() {
     const listaEmprendedores = document.getElementById('lista-emprendedores');
     // Limpiar contenido previo
     listaEmprendedores.innerHTML = '';

     emprendedores.forEach(emprendedor => {
        const li = document.createElement('li');
        li.className = 'card';

        const article = document.createElement('article');
        
        const a = document.createElement('a');
        a.href = '#';

        // Imagen del emprendedor
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.src = emprendedor.foto;
        img.alt = emprendedor.nombre;
        figure.appendChild(img);

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
const canastas = [
    {
        foto: '../assets/images/canastas/canasta 1.png',
        nombre: 'Canasta 1',
        precio: 429.00
    },
    {
        foto: '../assets/images/canastas/canasta 2.png',
        nombre: 'Canasta 2',
        precio: 505.00
    },
    {
        foto: '../assets/images/canastas/canasta 3.png',
        nombre: 'Canasta 3',
        precio: 540.00
    },
    {
        foto: '../assets/images/canastas/canasta 4.png',
        nombre: 'Canasta 4',
        precio: 495.00
    }
];

/**
 * Genera dinámicamente la lista de canastas
 * Crea cards con estructura: <li.card> > <article> > <a> > (figure, h3, p)
 * Similar a productos destacados pero sin marca (solo nombre y precio)
 */
function generarCanastas() {
    const listaCanastas = document.getElementById('lista-canastas');
    // Limpiar contenido previo
    listaCanastas.innerHTML = '';

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
    generarCategorias();
    generarDestacados();
    generarEmprendedores();
    generarCanastas();
});