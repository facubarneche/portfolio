import React from 'react'
import NavbarCss from './Navbar.css'


const Navbar = () => {
    return (
        <nav className="my-navbar">
            <main className="my-name">
                <h2>Facundo Barneche</h2>
            </main>
            <div className="my-media-social">
                <a href="https://facebook.com/facundo.barneche" target="_blank"><i className="fab fa-facebook-f"></i></a>
                <a href="https://instagram.com/fh.barneche/" target="_blank"><i className="fab fa-instagram"></i></a>
                <a href="https://linkedin.com/in/facundo-barneche/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/facubarneche" target="_blank"><i className="fab fa-github"></i></a>
                <a href=""><i className="fab fa-whatsapp"></i></a>
            </div>
        </nav>
    )
}

export default Navbar
