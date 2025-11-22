import { Link } from 'react-router-dom';

function EmprendedorCard({ emprendedor }) {
    const handleImageError = (e) => {
        e.target.onerror = null;
        e.target.src = '../assets/icons/hecho-en-nl.svg';
    };

    return (
        <li className="card">
            <article>
                <Link to={`/emprendedor/${emprendedor.id}`}>
                    <figure>
                        <img 
                            src={emprendedor.foto || emprendedor.logo || '../assets/icons/hecho-en-nl.svg'} 
                            alt={emprendedor.nombre}
                            onError={handleImageError}
                        />
                    </figure>

                    <h3>{emprendedor.nombre}</h3>
                    <p>{emprendedor.descripcion}</p>
                </Link>
            </article>
        </li>
    );
}

export default EmprendedorCard;
