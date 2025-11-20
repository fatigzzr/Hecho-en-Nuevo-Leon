import { categorias } from '../data/data';

function Nav() {
    return (
        <nav aria-label="Navegación Principal" id="nav-principal">
            <ul id="lista-categorias">
                {categorias.map((categoria, index) => (
                    <li className="categoria" key={index}>
                        <a href="#">{categoria}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;
