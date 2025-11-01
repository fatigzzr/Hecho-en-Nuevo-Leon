const categorias = ['Salsas & Aderezos', 'Mieles', 'Licores', 'Dulces', 'Cacao & Snacks', 'Mermeladas', 'Tés', 'Comidas Preparadas'];

function generarCategorias() {
    const listaCategorias = document.getElementById('lista-categorias');
    
    listaCategorias.innerHTML = '';
    
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

function generarDestacados() {
    const listaProductos = document.getElementById('lista-productos');
    listaProductos.innerHTML = '';

    destacados.forEach(producto => {
        const li = document.createElement('li');
        li.className = 'card';

        const article = document.createElement('article');

        const a = document.createElement('a');
        a.href = '#';

        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.src = producto.foto;
        img.alt = producto.nombre;
        figure.appendChild(img);

        const nombre = document.createElement('h3');
        nombre.textContent = producto.nombre;

        const marca = document.createElement('p');
        marca.textContent = producto.marca;

        const precio = document.createElement('p');
        precio.textContent = `$${producto.precio}`;

        a.appendChild(figure);
        a.appendChild(nombre);
        a.appendChild(marca);
        a.appendChild(precio);
        
        article.appendChild(a);

        li.appendChild(article);

        listaProductos.appendChild(li);
    });
}

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
        descripcion: 'Té “7 Azahares”'
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

function generarEmprendedores() {
     const listaEmprendedores = document.getElementById('lista-emprendedores');
     listaEmprendedores.innerHTML = '';

     emprendedores.forEach(emprendedor => {
        const li = document.createElement('li');
        li.className = 'card';

        const article = document.createElement('article');
        
        const a = document.createElement('a');
        a.href = '#';

        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.src = emprendedor.foto;
        img.alt = emprendedor.nombre;
        figure.appendChild(img);

        const nombre = document.createElement('h3');
        nombre.textContent = emprendedor.nombre;

        const descripcion = document.createElement('p');
        descripcion.textContent = emprendedor.descripcion;

        a.appendChild(figure);
        a.appendChild(nombre);
        a.appendChild(descripcion);

        article.appendChild(a);

        li.appendChild(article);

        listaEmprendedores.appendChild(li);
     });
}

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

function generarCanastas() {
    listaCanastas = document.getElementById('lista-canastas');
    listaCanastas.innerHTML = '';

    canastas.forEach(canasta => {
        const li = document.createElement('li');
        li.className = 'card';

        const article = document.createElement('article');

        const a = document.createElement('a');
        a.href = '#';

        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.src = canasta.foto;
        img.alt = canasta.nombre;
        figure.appendChild(img);

        const nombre = document.createElement('h3');
        nombre.textContent = canasta.nombre;

        const precio = document.createElement('p');
        precio.textContent = `$${canasta.precio}`;

        a.appendChild(figure);
        a.appendChild(nombre);
        a.appendChild(precio);

        article.appendChild(a);

        li.appendChild(article);

        listaCanastas.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    generarCategorias();
    generarDestacados();
    generarEmprendedores();
    generarCanastas();
});