import ErrorImg from "../assets/error/404.png";
import "../styles/Error.scss";
import { Link } from "react-router-dom";

const ErrorContent = () => {
    return (
        <>
        <div className="error_content">
            <img className = "error_img" src={ErrorImg} alt="pic page not found" />
            <p className="error_text">Oups! La page que vous demandez n'existe pas.</p>
            <Link className = "error_link_home" to="/">Retourner sur la page d'accueil</Link>
        </div>
        </>
    );
};

export default ErrorContent;