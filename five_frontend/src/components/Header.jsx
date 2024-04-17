import { Link, NavLink } from 'react-router-dom'
import '../assets/css/style.css'
import logo from '../assets/img/logo.png'
import iconoMenu from '../assets/img/menu.png'

const Header = () => {
  return (
    <>
        <div className="wrapp">
            <header className="header">            
                <div className="contenedor">
                    <nav className="nav">
                        
                        <div className="nav__logo">
                            <img className="nav__logo__img" src={logo} alt="logo" />
                        </div>

                        <img className="nav__mostrar__menu" id="nav__desplegar__menu" src={iconoMenu} width="30px" alt="icono-menu" />
                        
                        <div className="nav__elementos">
                            <ul className="nav__items nav__items--visible">
                                <li className="nav__item">
                                    <NavLink className={({isActive})=> isActive ? 'nav__item--active' : ''}  aria-label="" to="/">Inicio</NavLink>
                                    {/* <NavLink className="nav__item--active"  aria-label="" to="/">Inicio</NavLink> */}
                                </li>
                                <li className="nav__item">
                                <NavLink className={({isActive})=> isActive ? 'nav__item--active' : ''}  aria-label="" to="/producto">Productos</NavLink>
                                    {/* <Link to="/producto">Productos</Link> */}
                                </li>
                                <li className="nav__item">
                                <NavLink className={({isActive})=> isActive ? 'nav__item--active' : ''}  aria-label="" to="/somos">Quienes Somos</NavLink>
                                    {/* <Link to="/somos">Quienes somos</Link> */}
                                </li>
                                <li className="nav__item">
                                <NavLink className={({isActive})=> isActive ? 'nav__item--active' : ''}  aria-label="" to="/contacto">Contácto</NavLink>
                                    {/* <Link to="/contacto">Contactanos</Link> */}
                                </li>
                            </ul>
                        </div>
                    </nav> 
                </div>
            </header>
        </div>
    </>
  )
}

export default Header
