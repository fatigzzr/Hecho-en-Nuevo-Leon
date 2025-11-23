function ProductCard({ producto }) {
    return (
        <li className="card">
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
    );
}

export default ProductCard;
