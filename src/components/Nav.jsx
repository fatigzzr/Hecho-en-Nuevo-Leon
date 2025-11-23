import { categorias } from '../data/data';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav aria-label="Navegación Principal" id="nav-principal">
            <ul id="lista-categorias">
                {categorias.map((categoria, index) => (
                    <li className="categoria" key={index}>
                        <Link to={`/categorias/${categoria.id}`}>{categoria.nombre}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;
