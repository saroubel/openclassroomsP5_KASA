import React from "react";
import "../../styles/LogementDetails/Carrousel.scss";

function Carrousel({ pictures }) {
    return (
        <div className="carrousel-container">
            {/* OneCarrousel affiche une image par image */}
            {pictures.map((oneCarrousel) => (
                <div className="carrousel">
                    <img src={oneCarrousel} className="carrousel-img" alt="carrousel"
                    />
                </div>
            ))}
        </div>
    );
}

export default Carrousel;