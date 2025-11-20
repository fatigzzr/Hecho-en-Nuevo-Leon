import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="main-header">
            <figure id="logo-gobierno-nl">
                <img src="../assets/icons/gobierno-nl.svg" alt="Logo Gobierno de Nuevo León" />
            </figure>
            
            <h1 id="t-site">
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Hecho en Nuevo León
                </Link>
            </h1>

            <form role="search" action="#" method="get" aria-label="Buscar productos" id="search-bar">
                <label htmlFor="query" className="visually-hidden">Buscar</label>
                <img src="../assets/icons/search.svg" alt="Icono de busqueda: Lupa" aria-hidden="true" />
                <input id="query" name="query" type="search" placeholder="Buscar producto ..." required />
            </form>
        </header>
    );
}

export default Header;
