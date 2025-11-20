function CanastaCard({ canasta }) {
    return (
        <li className="card">
            <article>
                <a href="#">
                    <figure>
                        <img src={canasta.foto} alt={canasta.nombre} />
                    </figure>

                    <h3>{canasta.nombre}</h3>
                    <p>${canasta.precio}</p>
                </a>
            </article>
        </li>
    );
}

export default CanastaCard;
