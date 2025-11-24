import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import EmprendedorCard from '../components/EmprendedorCard';
import CanastaCard from '../components/CanastaCard';
import { obtenerDestacados, obtenerTodosEmprendedores, obtenerCanastas, buscarProductos } from '../data/data';

function Home() {
    const [searchParams] = useSearchParams();
    const searchTerm = searchParams.get('search');
    const [destacados, setDestacados] = useState([]);
    const [emprendedores, setEmprendedores] = useState([]);
    const [canastas, setCanastas] = useState([]);
    const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
    const [mostrarResultados, setMostrarResultados] = useState(false);

    useEffect(() => {
        if (searchTerm) {
            const resultados = buscarProductos(searchTerm);
            setResultadosBusqueda(resultados);
            setMostrarResultados(true);
        } else {
            setMostrarResultados(false);
            setDestacados(obtenerDestacados());
            setEmprendedores(obtenerTodosEmprendedores());
            setCanastas(obtenerCanastas());
        }
    }, [searchTerm]);

    return (
        <>
            <Header />
            <Nav />

            {/* Contenido principal - Layout adaptativo con grid responsivo */}
            <main>
                {mostrarResultados ? (
                    <section aria-labelledby="t-resultados-busqueda" className="section-container" id="resultados">
                        <h2 id="t-resultados-busqueda">Resultados de búsqueda para: "{searchTerm}"</h2>
                        <p>{resultadosBusqueda.length} resultados encontrados</p>
                        
                        <ul id="lista-productos">
                            {resultadosBusqueda.length > 0 ? (
                                resultadosBusqueda.map((producto, index) => (
                                    <ProductCard key={`${producto.id || index}`} producto={producto} />
                                ))
                            ) : (
                                <p>No se encontraron resultados para tu búsqueda</p>
                            )}
                        </ul>
                    </section>
                ) : (
                    <>
                        {/* Productos destacados */}
                        <section aria-labelledby="t-productos-destacados" className="section-container" id="destacados">
                            <h2 id="t-productos-destacados">Productos Destacados</h2>

                            {/* Lista generada dinámicamente con obtenerDestacados() */}
                            <ul id="lista-productos">
                                {/* Plantilla: Cada producto incluye imagen, nombre, marca y precio */}
                                {destacados.map((producto, index) => (
                                    <ProductCard key={index} producto={producto} />
                                ))}
                            </ul>
                        </section>

                        {/* Emprendedores */}
                        <section aria-labelledby="t-emprendedores" className="section-container" id="emprendedores">
                            <h2 id="t-emprendedores">Emprendedores</h2>

                            {/* Lista generada dinámicamente con obtenerTodosEmprendedores() */}
                            <ul id="lista-emprendedores">
                                {/* Plantilla: Cada emprendedor incluye imagen, nombre y descripción */}
                                {emprendedores.map((emprendedor) => (
                                    <EmprendedorCard key={emprendedor.id} emprendedor={emprendedor} />
                                ))}
                            </ul>
                        </section>

                        {/* Canastas */}
                        <section aria-labelledby="t-canastas" className="section-container" id="canastas">
                            <h2 id="t-canastas">Canastas</h2>

                            {/* Lista generada dinámicamente con obtenerCanastas() */}
                            <ul id="lista-canastas">
                                {/* Plantilla: Cada canasta incluye imagen, nombre y precio */}
                                {canastas.map((canasta, index) => (
                                    <CanastaCard key={index} canasta={canasta} />
                                ))}
                            </ul>
                        </section>
                    </>
                )}
            </main>

            <Footer />
        </>
    );
}

export default Home;
