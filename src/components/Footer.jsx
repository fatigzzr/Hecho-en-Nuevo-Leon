function Footer() {
    return (
        <footer>
            <section>
                <figure className="logos">
                    <img src="../assets/icons/hecho-en-nl.svg" alt="Logo Hecho en Nuevo León" />
                    <img src="../assets/icons/economia-nl.svg" alt="Logo Gobierno de Nuevo León" />
                </figure>
            </section>

            <section className="contactos-section">
                <h3 id="t-contacto">Contáctanos</h3>

                <address>
                    <a href="tel:+528181817643" aria-label="Teléfono de contacto" className="contacto-container">
                        <img src="../assets/icons/phone.svg" alt="Icono teléfono" aria-hidden="true" />
                        <p>(81) 8181 7643</p>
                    </a>

                    <a href="mailto:hechoennuevoleonmexico@gmail.com" aria-label="Correo de contacto" className="contacto-container">
                        <img src="../assets/icons/mail.svg" alt="Icono mail" aria-hidden="true" />
                        <p>hechoennuevoleonmexico@gmail.com</p>
                    </a>
                </address>
            </section>
        </footer>
    );
}

export default Footer;
