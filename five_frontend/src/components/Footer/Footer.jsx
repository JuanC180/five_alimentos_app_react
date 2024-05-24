// import '../assets/css/style.css'
import logoFooter from '../../assets/img/logocircular.png'
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
                                    <p className="footer__descripcion__texto">Teléfono: +57  (313) 5955148</p>
                                    <p className="footer__descripcion__texto">Correo: fivecomidaalvacio@gmail.com</p>
                                    <p className='footer__descripcion__texto'>Dirección: Cra 49 # 137 sur - 87 (Barrios Unidos)</p>
                                    <p className="footer__descripcion__texto">Cuidad: Caldas - Antioquia</p>
                                     
                                </div>
                            </div>
                        </div>
                        <div className="footer__iconos">
                            <a href="https://www.instagram.com/fivecafebar" target='_blank'>
                                <img className="footer__iconos--width" src={logoInstagram} alt="logo-instagram" />
                            </a>
                        </div>
                        
                    </div>
                    <div className='footer__final'>
                    
                    
                    </div>

                     <div className='footer__copyright-sena'>
                        <div className='footer__img'></div>
                        <div>
                            <p className='footer__copyright'>
                                Página web informativa desarrollada por la fábrica de Software de la Unidad de Servicios Tecnológicos SENA
                                Para mayor información contacta serviciotecnologico@sena.edu.co 
                            </p>
                           <p className="footer__copyright2"><br />© 2024 - Todos los derechos reservados</p>
                        </div>
                    </div> 
                </div>
            </footer>
        </div>
    </>
  )
}

export default Footer
