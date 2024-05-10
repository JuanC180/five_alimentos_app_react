import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import '../Header/css/Header.css'
import logo from '../../assets/img/logocircular.png'
import iconoMenu from '../../assets/img/menu-50.png'



const Header = () => {

    const [MenuVisible, setMenuVisible] = useState(true)

    useEffect(()=>{
        
    },[])

    const handleOnclick = (e)=> {
        e.preventDefault()

        const desplegarMenu = document.querySelector('#nav__desplegar__menu');
        const agregarClase = document.querySelector(".nav__items--visible");
    
        if (MenuVisible) {
            setMenuVisible(false);

        } else {
            setMenuVisible(true);
        }

    }

  return (
    <>
        <div className="wrapp">
            <header className="header">            
                <div className="header__contenedor">
                    <nav className="nav">
                        
                        <div className="nav__logo">
                            <Link to='/'>
                                <img className="nav__logo__img" src={logo} alt="logo" />
                            </Link>
                        </div>

                       
                            <img className="nav__mostrar__menu" id="nav__desplegar__menu" onClick={handleOnclick} src={iconoMenu} width="30px" alt="icono-menu" />
              
                        
                        <div className="nav__elementos">
                            <ul className={`nav__items ${MenuVisible ? "nav__items--visible" : ""}`}>
                                <li className="nav__item">
                                    <NavLink className={({isActive})=> isActive ? 'nav__item--active' : ''}  aria-label="" to="/">Inicio</NavLink>
                                </li>
                                <li className="nav__item">
                                <NavLink className={({isActive})=> isActive ? 'nav__item--active' : ''}  aria-label="" to="/producto">Productos</NavLink>
                                </li>
                                <li className="nav__item">
                                <NavLink className={({isActive})=> isActive ? 'nav__item--active' : ''}  aria-label="" to="/somos">Quienes Somos</NavLink>
                                </li>
                                <li className="nav__item">
                                <NavLink className={({isActive})=> isActive ? 'nav__item--active' : ''}  aria-label="" to="/contacto">Contacto</NavLink>
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
