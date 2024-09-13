import React from "react";
import { useState } from "react";
import "../styles/Collapse.scss";
// Les images de collapse	
import ArrowDown from "../assets/collapse/arrow_down.png";
import ArrowUp from "../assets/collapse/arrow_up.png";


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
                {/* image sera down si la collapse est ouverte sinon up */}
                <img src={isOpen ? ArrowDown : ArrowUp} alt="flèche de collapse"  onClick={() => { display() }}></img>
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