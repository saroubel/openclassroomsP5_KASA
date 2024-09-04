import logoFooter from "../assets/logo/logo_footer.png";
import "../styles/Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <img className="logo_footer" src={logoFooter} alt="logo de Kasa en blanc" />
            <p className="footer_text">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;