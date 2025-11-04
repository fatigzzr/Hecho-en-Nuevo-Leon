// Base de datos unificada de emprendedores
// Renombrado a `dataEmprendedores` para evitar colisiones con otras variables globales
const dataEmprendedores = {
    // existentes (no cambiar IDs)
    "chilito-pikin": {
        id: "chilito-pikin",
        nombre: "Chilito Pikin",
        logo: "../assets/images/emprendedores/chilito pikin.jpg",
        descripcion: "Chilito Pikín nació en San Nicolás de los Garza, Nuevo León, para llevar el auténtico sabor mexicano del barrio a tu mesa. Nuestras salsas artesanales, hechas con puro chile real y con ese toque casero, te harán decir: ¡Esto sí pica sabroso!",
        categoria: "Salsas & Aderezos",
        productos: [
            { id: "prod-1", nombre: "Salsa Macha", precio: 429.00, imagen: "../assets/images/productos/salsa macha chilito pikin.png", descripcion: "Salsa artesanal con chile de árbol" },
            { id: "prod-2", nombre: "Salsa Verde Cremosa", precio: 505.00, imagen: "../assets/images/productos/salsa verde cremosa chilito pikin.png", descripcion: "Extra picante con habanero" },
            { id: "prod-3", nombre: "Salsa La Machi", precio: 540.00, imagen: "../assets/images/productos/salsa la machi chilito pikin.png", descripcion: "Salsa verde con cilantro" },

        ],
        contacto: { instagram: "salsaschilitopikin", facebook: "salsas chilito pikin" }
    },

    // datos combinados desde el array original + info inventada
    "somos-sabores": {
        id: "somos-sabores",
        nombre: "Somos Sabores",
        logo: "../assets/images/emprendedores/somos sabores.jpeg",
        descripcion: "Chimichurri y salsas de Jamaica artesanales, inspiradas en recetas locales.",
        categoria: "Salsas & Aderezos",
        productos: [
            { id: "prod-7", nombre: "Chimichurri Clásico", precio: 180.00, imagen: "../assets/images/productos/chimichurri somos sabores.png", descripcion: "Perfecto para carnes y pan." },
            { id: "prod-8", nombre: "Salsa de Jamaica", precio: 150.00, imagen: "../assets/images/productos/salsa de jamaica con morita somos sabores.png", descripcion: "Refrescante y ligeramente ácida." }
        ],
        contacto: { instagram: "somossabores", facebook: "Somos Sabores" }
    },

    "del-huerto-de-santiago": {
        id: "del-huerto-de-santiago",
        nombre: "Del Huerto de Santiago",
        logo: "../assets/images/emprendedores/del huerto de santiago.jpg",
        descripcion: "Licor de manzana artesano, producido con fruta local y destilación tradicional.",
        categoria: "Bebidas",
        productos: [
            { id: "prod-9", nombre: "Licor de Manzana 500ml", precio: 420.00, imagen: "../assets/images/productos/licor de manzana del huerto de santiago.png", descripcion: "Notas dulces y florales." }
        ],
        contacto: { instagram: "delhuertodesantiago" }
    },

    "abellamia": {
        id: "abellamia",
        nombre: "Abellamia",
        logo: "../assets/images/emprendedores/abellamia.png",
        descripcion: "Miel pura de colmena, en presentaciones para cocina y para consumo directo.",
        categoria: "Mieles",
        productos: [
            { id: "prod-10", nombre: "Miel Pura 250g", precio: 140.00, imagen: "../assets/images/productos/miel abellamia.png", descripcion: "Sabor floral, sin aditivos." }
        ],
        contacto: { instagram: "abellamia", facebook: "Abellamia" }
    },

    "los-cavazos": {
        id: "los-cavazos",
        nombre: "Los Cavazos",
        logo: "../assets/images/emprendedores/los cavazos.jpg",
        descripcion: "Salsa Cambray tradicional, receta familiar desde hace décadas.",
        categoria: "Salsas & Aderezos",
        productos: [
            { id: "prod-11", nombre: "Salsa Cambray 300ml", precio: 190.00, imagen: "../assets/images/productos/salsa cambray.png", descripcion: "Salsa agridulce con toque picante." }
        ],
        contacto: { instagram: "loscavazos" }
    },

    "dulces-finos-victoria": {
        id: "dulces-finos-victoria",
        nombre: "Dulces finos Victoria",
        logo: "../assets/images/emprendedores/dulces finos victoria.jpg",
        descripcion: "Especialistas en rollos de guayaba y glorias artesanales.",
        categoria: "Dulces",
        productos: [
            { id: "prod-12", nombre: "Rollo de Guayaba 200g", precio: 95.00, imagen: "../assets/images/productos/rollo de guayaba dulces finos victoria.png", descripcion: "Hecho a mano, la tradición en cada bocado." },
            { id: "prod-13", nombre: "Glorias Tradicionales (6pz)", precio: 120.00, imagen: "../assets/images/productos/glorias dulces finos victoria.png", descripcion: "Dulces de leche y nuez." }
        ],
        contacto: { instagram: "dulcesvictoria" }
    },

    "olartesanal": {
        id: "olartesanal",
        nombre: "Olartesanal",
        logo: "../assets/images/emprendedores/olartesanal.png",
        descripcion: "Cacao garapiñado y chocolates artesanales con cacao local.",
        categoria: "Cacao & Chocolates",
        productos: [
            { id: "prod-14", nombre: "Cacao Garapiñado 150g", precio: 130.00, imagen: "../assets/images/productos/cacao garapiñado olartesanal.png", descripcion: "Crujiente y chocolatoso." }
        ],
        contacto: { instagram: "olartesanal" }
    },

    "la-monita": {
        id: "la-monita",
        nombre: "La monita",
        logo: "../assets/images/emprendedores/la monita.png",
        descripcion: "Productos caseros: miel, chorizos, empanadas y conservas.",
        categoria: "Conservas & Embutidos",
        productos: [
            { id: "prod-15", nombre: "Chorizo Artesanal 400g", precio: 200.00, imagen: "../assets/images/productos/miel la monita.png", descripcion: "Sabor tradicional, sin conservadores." },
            { id: "prod-16", nombre: "Empanada de Queso (unidad)", precio: 45.00, imagen: "../assets/images/productos/miel la monita.png", descripcion: "Masa casera y queso local." }
        ],
        contacto: { instagram: "lamonita" }
    },

    "masedi-de-la-cosecha-a-tu-mesa": {
        id: "masedi-de-la-cosecha-a-tu-mesa",
        nombre: "MASEDI de la cosecha a tu mesa",
        logo: "../assets/images/emprendedores/masedi de la cosecha a tu mesa.jpeg",
        descripcion: "Mermeladas artesanales hechas con fruta de temporada.",
        categoria: "Conservas",
        productos: [
            { id: "prod-17", nombre: "Mermelada de Fresa 250g", precio: 95.00, imagen: "../assets/images/productos/mermelada artesanal de calabaza y nuez masedi de la cosecha a tu mesa.png", descripcion: "Con fruta local y bajo en azúcares." }
        ],
        contacto: { instagram: "masedi" }
    },

    "linaje-de-perros": {
        id: "linaje-de-perros",
        nombre: "Linaje de Perros",
        logo: "../assets/images/emprendedores/linaje-de-perros.png",
        descripcion: "Destilado de agave artesanal, con afinación en barrica.",
        categoria: "Bebidas",
        productos: [
            { id: "prod-18", nombre: "Destilado Agave 700ml", precio: 650.00, imagen: "../assets/images/productos/estuche 3 mini botellas linaje de perro.png", descripcion: "Notas herbales y ahumadas." }
        ],
        contacto: { instagram: "linajedeperros" }
    },

    "manos-nativas": {
        id: "manos-nativas",
        nombre: "Manos Nativas",
        logo: "../assets/images/emprendedores/manosnativas.jpg",
        descripcion: "Tés y hierbas empaquetadas a mano, mezcla '7 Azahares' entre otras.",
        categoria: "Tés & Infusiones",
        productos: [
            { id: "prod-19", nombre: "Té 7 Azahares 50g", precio: 85.00, imagen: "../assets/images/productos/7 azhares te manos nativas.png", descripcion: "Relajante y aromático." }
        ],
        contacto: { instagram: "manosnativas" }
    },

    "grill-kong": {
        id: "grill-kong",
        nombre: "Grill Kong",
        logo: "../assets/images/emprendedores/grill kong.jpeg",
        descripcion: "Sazonadores y mezclas para parrilla, hechos con especias locales.",
        categoria: "Sazonadores",
        productos: [
            { id: "prod-20", nombre: "Sazonador BBQ 200g", precio: 120.00, imagen: "../assets/images/productos/sazonadores grill kong.png", descripcion: "Mezcla dulce y ahumada." }
        ],
        contacto: { instagram: "grillkong" }
    },

    "pikabite": {
        id: "pikabite",
        nombre: "Pikabite",
        logo: "../assets/images/emprendedores/pikabite.jpg",
        descripcion: "Salsa macha y condimentos con influencia regional.",
        categoria: "Salsas & Aderezos",
        productos: [
            { id: "prod-21", nombre: "Salsa Macha Pikabite 200ml", precio: 165.00, imagen: "../assets/images/productos/salsa macha pikabite.png", descripcion: "Crujiente y con aceite de calidad." }
        ],
        contacto: { instagram: "pikabite", facebook: "Pikabite" }
    }
};

// Función para obtener un emprendedor por ID
function obtenerEmprendedor(id) {
    return dataEmprendedores[id] || null;
}

// Función para obtener todos los emprendedores (como array)
function obtenerTodosEmprendedores() {
    return Object.values(dataEmprendedores);
}

// Función para obtener emprendedores por categoría
function obtenerEmprendedoresPorCategoria(categoria) {
    return Object.values(dataEmprendedores).filter(emp => emp.categoria === categoria);
}

// Datos de productos destacados (centralizados)
const dataDestacados = [
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
    }
];

function obtenerDestacados() {
    return dataDestacados;
}

// Datos de canastas (centralizados)
const dataCanastas = [
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

function obtenerCanastas() {
    return dataCanastas;
}
