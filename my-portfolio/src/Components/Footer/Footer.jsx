import React from 'react'
import FooterCss from './Footer.css'


const Footer = () => {
    return (
        <footer className="my-footer">
            <div className="my-about">
                <h2>Sobre mí</h2>
               <div className="my-div-about">
                   <img className="my-image" src="https://i.blogs.es/b54943/god1/840_560.jpg" alt="Imagen mia, Facundo Barneche"/>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem vero natus nihil omnis alias eum provident odit doloribus, ad, non similique minima, quasi exercitationem dicta. Harum voluptas corporis officia numquam.
               </p>
               </div>
            </div>
            <div className="my-contact">
                <h2>Contacto</h2>
                <div className="my-div-contact">
                <p>No dude en contactarme por cualquier consulta sobre mis servicios</p>
                <p className="phone">1530702253</p>
                <p>fh.barneche@gmail.com</p>
                </div>
            </div>
            <div className="my-footer-media-social">
                <h2>Social</h2>
                <p>Si desea contactarme por otro medio. <br/> A continuación se muestra mis redes sociales</p>
               <div className="my-icons">
               <a href="https://facebook.com/facundo.barneche" target="_blank"><i className="fab fa-facebook-f"></i></a>
                <a href="https://instagram.com/fh.barneche/" target="_blank"><i className="fab fa-instagram"></i></a>
                <a href="https://linkedin.com/in/facundo-barneche/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/facubarneche" target="_blank"><i className="fab fa-github"></i></a>
                <a href=""><i className="fab fa-whatsapp"></i></a>
            </div>
               </div>
        </footer>
    )
}

export default Footer