import logo from "../assets/logo/logo_header.png";
import { NavLink } from "react-router-dom";
import '../styles/Header.scss';

const Header = () => {
    return (
        <header className="header">
            <img className="logo_header" src= {logo} alt="logo de Kasa" />
            <nav className="nav-bar">
                <NavLink to="/" className="nav_home">Accueil</NavLink>
                <NavLink to="/about" className="nav_about">A propos</NavLink>
            </nav>
        </header>
    );
};

export default Header;