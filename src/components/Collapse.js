import React from "react";
import { useState } from "react";
import "../styles/Collapse.scss";
// import Font Awesomede pour collapse	
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";


function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false); //par défaut la collapse est fermée

    //fonction pour afficher le contenu de la collapse
    const display = () => {
        setIsOpen(!isOpen);
    }

    //contenu de la collapse
    return (
        <div className="collapse">
            <div className="collapse-title">
                <p>{title}</p>
                {/* icone sera down si la collapse est ouverte sinon up */}
                <FontAwesomeIcon 
                    icon={isOpen ? faChevronDown : faChevronUp } 
                    onClick={display}
                    className="collapse-icon"
                    aria-label="Flèche de collapse"
                />
            </div>

            {/*affiche le contenu si la collapse est ouverte */}
            {isOpen && 
                <div className="collapse-content">
                <p>{content}</p>
                </div>}
        </div>
    );
}


export default Collapse; 