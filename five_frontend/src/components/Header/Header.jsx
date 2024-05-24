import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Header/css/Header.css';
import logo from '../../assets/img/logocircular.png';
import iconoMenu from '../../assets/img/menu-50.png';

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const handleOnClick = (e) => {
        e.preventDefault();
        setMenuVisible(!menuVisible);
    };

    return (
        <>
            <div className="wrapp">
                <header className={`header ${menuVisible ? 'expanded' : ''}`}>
                    <div className="header__contenedor">
                        <nav className="nav">
                            <div className="nav__logo">
                                <Link to="/">
                                    <img className="nav__logo__img" src={logo} alt="logo" />
                                </Link>
                            </div>
                            <img
                                className="nav__mostrar__menu"
                                id="nav__desplegar__menu"
                                onClick={handleOnClick}
                                src={iconoMenu}
                                width="30px"
                                alt="icono-menu"
                            />
                            <div className="nav__elementos">
                                <ul className={`nav__items ${menuVisible ? 'nav__items--visible' : ''}`}>
                                    <li className="nav__item">
                                        <NavLink
                                            className={({ isActive }) => (isActive ? 'nav__item--active' : '')}
                                            to="/"
                                        >
                                            Inicio
                                        </NavLink>
                                    </li>
                                    <li className="nav__item">
                                        <NavLink
                                            className={({ isActive }) => (isActive ? 'nav__item--active' : '')}
                                            to="/producto"
                                        >
                                            Productos
                                        </NavLink>
                                    </li>
                                    <li className="nav__item">
                                        <NavLink
                                            className={({ isActive }) => (isActive ? 'nav__item--active' : '')}
                                            to="/somos"
                                        >
                                            Quiénes Somos
                                        </NavLink>
                                    </li>
                                    <li className="nav__item">
                                        <NavLink
                                            className={({ isActive }) => (isActive ? 'nav__item--active' : '')}
                                            to="/contacto"
                                        >
                                            Contacto
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
        </>
    );
};

export default Header;
