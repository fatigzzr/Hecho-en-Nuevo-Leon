import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { obtenerEmprendedor } from '../data/data';

function Emprendedor() {
    const [searchParams] = useSearchParams();
    const [emprendedor, setEmprendedor] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const emprendedorId = searchParams.get('id');
        
        if (!emprendedorId) {
            setError(true);
            return;
        }

        const data = obtenerEmprendedor(emprendedorId);
        
        if (!data) {
            setError(true);
            return;
        }

        setEmprendedor(data);
        document.title = `${data.nombre} - Hecho en Nuevo León`;
    }, [searchParams]);

    const handleImageError = (e) => {
        e.target.onerror = null;
        e.target.src = '../assets/icons/hecho-en-nl.svg';
    };

    const verDetalleProducto = (productoId) => {
        console.log('Ver detalle del producto:', productoId);
        alert('Funcionalidad de detalle de producto en desarrollo');
    };

    if (error) {
        return (
            <>
                <Header />
                <Nav />
                <main id="main-emprendedor">
                    <section id="error-emprendedor" className="error-section">
                        <h2>Emprendedor no encontrado</h2>
                        <p>Lo sentimos, no pudimos encontrar la información de este emprendedor.</p>
                        <a href="../index.html" className="btn-primary">Volver al inicio</a>
                    </section>
                </main>
                <Footer />
            </>
        );
    }

    if (!emprendedor) {
        return null;
    }

    return (
        <>
            <Header />
            <Nav />
            <main id="main-emprendedor">
                <section aria-labelledby="t-descripcion-emprendedor" className="section-container" id="descripcion-emprendedor">
                    <div className="emprendedor-header">
                        <figure className="logo-emprendedor">
                            <img 
                                id="logo-emprendedor" 
                                src={emprendedor.logo} 
                                alt="Logo"
                                onError={handleImageError}
                            />
                        </figure>
                        <h2 id="t-descripcion-emprendedor">{emprendedor.nombre}</h2>
                        <p id="descripcion-texto">{emprendedor.descripcion}</p>
                    </div>
                </section>

                <section aria-labelledby="t-nuestros-productos" className="section-container" id="nuestros-productos">
                    <h2 id="t-nuestros-productos">Nuestros productos</h2>

                    <ul id="lista-productos" className="productos-grid">
                        {emprendedor.productos && emprendedor.productos.length > 0 ? (
                            emprendedor.productos.map((producto) => (
                                <li className="card" key={producto.id}>
                                    <article>
                                        <a href="#" onClick={(e) => { e.preventDefault(); verDetalleProducto(producto.id); }}>
                                            <figure>
                                                <img src={producto.imagen} alt={producto.nombre} loading="lazy" />
                                            </figure>
                                            <h3>{producto.nombre}</h3>
                                            <p className="precio">${producto.precio.toFixed(2)}</p>
                                            {producto.descripcion && <p className="descripcion-corta">{producto.descripcion}</p>}
                                        </a>
                                    </article>
                                </li>
                            ))
                        ) : (
                            <p>Este emprendedor aún no tiene productos registrados.</p>
                        )}
                    </ul>
                </section>

                <section aria-labelledby="contactanos-emprendedor" className="section-container" id="contacto-emprendedor">
                    <div className="contacto-header">
                        <h2 id="contactanos-emprendedor">Contáctanos</h2>
                        <div className="contacto-grid">
                            <figure className="logo-contacto">
                                <img 
                                    id="logo-contacto" 
                                    src={emprendedor.logo} 
                                    alt="Logo"
                                    onError={handleImageError}
                                />
                            </figure>
                        </div>

                        <div className="redes-contacto">
                            {emprendedor.contacto.instagram && (
                                <a 
                                    id="link-instagram" 
                                    href={`https://instagram.com/${emprendedor.contacto.instagram}`} 
                                    target="_blank" 
                                    rel="noopener" 
                                    className="contacto-item"
                                >
                                    <img style={{width: '25px'}} src="../assets/icons/instagram_logo.svg" alt="Instagram" />
                                    <span id="texto-instagram">{emprendedor.nombre}</span>
                                </a>
                            )}

                            {emprendedor.contacto.facebook && (
                                <a 
                                    id="link-facebook" 
                                    href={`https://facebook.com/${emprendedor.contacto.facebook}`} 
                                    target="_blank" 
                                    rel="noopener" 
                                    className="contacto-item"
                                >
                                    <img style={{width: '25px'}} src="../assets/icons/facebook_logo.svg" alt="Facebook" />
                                    <span id="texto-facebook">{emprendedor.nombre}</span>
                                </a>
                            )}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Emprendedor;
