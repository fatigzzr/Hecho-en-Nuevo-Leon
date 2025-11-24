import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/?search=${encodeURIComponent(searchTerm)}`);
        }
    };

    return (
        <header className="main-header">
            <Link to="/">
                <figure id="logo-gobierno-nl">
                    <img src="../assets/icons/gobierno-nl.svg" alt="Logo Gobierno de Nuevo León" />
                </figure>
            </Link>
            
            <Link to="/">
                <h1 id="t-site">
                    Hecho en Nuevo León
                </h1>
            </Link>

            <form role="search" onSubmit={handleSearch} method="get" aria-label="Buscar productos" id="search-bar">
                <label htmlFor="query" className="visually-hidden">Buscar</label>
                <img src="../assets/icons/search.svg" alt="Icono de busqueda: Lupa" aria-hidden="true" />
                <input 
                    id="query" 
                    name="query" 
                    type="search" 
                    placeholder="Buscar producto ..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    required
                />
            </form>
        </header>
    );
}

export default Header;
