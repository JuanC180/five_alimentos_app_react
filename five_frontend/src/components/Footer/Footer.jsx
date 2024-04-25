// import '../assets/css/style.css'
import logoFooter from '../../assets/img/logo.png'
import logoFacebook from '../../assets/img/logo_facebook.png'
import logoInstagram from '../../assets/img/logo_instagram.png'
import logoX from '../../assets/img/logo_x2.png'
import '../Footer/css/Footer.css'


const Footer = () => {
  return (
    <>
        <div className='wrapp'>
            <footer className="footer">
                <div className="contenedor">
                    
                    <div className="footer__contenedor">
                        <div className="footer__informacion">
                            <div className="footer__logo">
                                <img className="footer__logo__img" src={logoFooter} alt="logo-footer" />
                            </div>
                            <div className="footer__texto">
                                <div className="footer__descripcion--color">
                                    <p className="footer__descripcion__texto">Teléfono: +57(305) 000 00 00</p>
                                    <p className="footer__descripcion__texto">Correo: alimentos@gmail.com</p>
                                    <p className="footer__descripcion__texto">Dirección: calle 7 sur 44 - 52</p>
                                    <p className="footer__descripcion__texto">Cuidad: Medellín</p>
                                </div>
                            </div>
                        </div>
                        <div className="footer__iconos">
                            <a href="#">
                                <img className="footer__iconos--width" src={logoFacebook} alt="logo-facebook" />
                            </a>
                            <a href="#">
                                <img className="footer__iconos--width" src={logoInstagram} alt="logo-instagram" />
                            </a>
                            <a href="#">
                                <img className="footer__iconos--width" src={logoX} alt="logo-x" />
                            </a>
                        </div>
                    </div>
                    <p className="footer__copyright">© 2024 - Todos los derechos reservados</p>
                </div>
            </footer>
        </div>
    </>
  )
}

export default Footer
