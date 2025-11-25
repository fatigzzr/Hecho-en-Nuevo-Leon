import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { categorias } from '../data/data';

function Categorias() {
    return (
        <>
            <Header />
            <main id='main-categorias'>
                <section className="categorias-disponibles">
                    <h2>Categorías Disponibles</h2>
                    <ul id="lista-categorias-disponibles">
                        {categorias.map((categoria, index) => (
                            <li key={index} className="categoria-item">
                                <Link 
                                    to={`/categorias/${categoria.id}`}
                                >
                                    {categoria.nombre}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Categorias;

