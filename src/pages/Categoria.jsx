import { useState } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Salsas_y_Aderezos } from '../data/data';

function Categoria() {
    const [productos] = useState(Salsas_y_Aderezos);

    return (
        <>
            <Header />
            <Nav />
            <main id="main-categoria">
                <section aria-labelledby="t-productos-categoria" className="section-container" id="categoria">
                    <h2 id="t-productos-categoria">Salsas & Aderezos</h2>
                    <p id="contador-productos">{productos.length} resultados</p>
                    <div className="filtros-contenedor">
                        <select className="filtros">
                            <option value="">Subcategorías</option>
                            <option value="Salsas">Salsas</option>
                            <option value="Aderezos">Aderezos</option>
                            <option value="Condimentos">Condimentos</option>
                        </select>

                        <select className="filtros">
                            <option value="">Ordenar por</option>
                            <option value="masvendidos">Más vendidos</option>
                            <option value="menoramayor">Menor a mayor</option>
                            <option value="mayoramenor">Mayor a menor</option>
                        </select>
                    </div>

                    <ul id="lista-productos-categoria">
                        {productos.map((producto, index) => (
                            <li className="card" key={index}>
                                <article>
                                    <a href="#">
                                        <figure>
                                            <img src={producto.foto} alt={producto.nombre} />
                                        </figure>

                                        <h3>{producto.nombre}</h3>
                                        <p>{producto.marca}</p>
                                        <p>${producto.precio}</p>
                                    </a>
                                </article>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Categoria;
