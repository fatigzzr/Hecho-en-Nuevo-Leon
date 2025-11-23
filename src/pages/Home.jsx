import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import EmprendedorCard from '../components/EmprendedorCard';
import CanastaCard from '../components/CanastaCard';
import { obtenerDestacados, obtenerTodosEmprendedores, obtenerCanastas } from '../data/data';

function Home() {
    const destacados = obtenerDestacados();
    const emprendedores = obtenerTodosEmprendedores();
    const canastas = obtenerCanastas();

    return (
        <>
            <Header />
            <Nav />

            {/* Contenido principal - Layout adaptativo con grid responsivo */}
            <main>
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
            </main>

            <Footer />
        </>
    );
}

export default Home;
