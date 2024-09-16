import '../styles/Header.scss';
import logo from "../assets/logo/logo_header.png";
import { NavLink } from "react-router-dom"; //Composant pour les liens de navigation

const Header = () => {
    return (
        <header className="header">
            <img className="logo_header" src= {logo} alt="logo de Kasa" />
            <nav className="nav-bar">
                <NavLink exact to="/accueil" className="nav_home" activeClassName="active" >Accueil</NavLink>
                <NavLink to="/about" className="nav_about" activeClassName="active">A propos</NavLink>
            </nav>
        </header>
    );
};

export default Header;