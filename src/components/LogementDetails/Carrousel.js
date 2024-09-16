import React from "react";
import { useState } from "react";                       
import "../../styles/LogementDetails/Carrousel.scss"
// import des icones de Font Awesome pour les carrousel
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


function Carrousel({ pictures }) {
    //les variables d'index de quelle image on est
    const [currentIndex, setCurrentIndex] = useState(0)
    const totalPictures = pictures.length

    // Fonction pour slid suivant
    const nextSlide = () => {
        // si c'est la dernière image on retourne a la première sinon ajoute 1 à l'index
        currentIndex === totalPictures - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)
    }

    // Fonction pour slid précédent
    const prevSlide = () => { 
        // si c'est la première image on retourne à la première sinon enleve 1 à l'index
        currentIndex === 0 ? setCurrentIndex(totalPictures - 1) : setCurrentIndex(currentIndex - 1)       
    }

    return (
        <div className="carrousel">
            {/* Image actuelle */}
            
            <img className="carrousel-img" src={pictures[currentIndex]} alt={pictures[currentIndex]} />

            {/* Affichage des chevron de navigation s'il y a plus d'une seule image */}
            {totalPictures > 1 && (
                <div>
                    {/* Bouton pour slid précédent */}
                    <div onClick={prevSlide} className="carrousel-button carrousel-button-left">
                        <FontAwesomeIcon icon={faChevronLeft} className="arrow" alt =" flèche précedente" />
                    </div>

                    {/* Bouton pour slid suivant */}
                    <div onClick={nextSlide} className="carrousel-button carrousel-button-right">
                        <FontAwesomeIcon icon={faChevronRight} className="arrow" alt = "flèche suivante"/>
                    </div>
                </div>
            )}

            {/* Affichage du compteur s'il y a plus d'une seule image */}
            <div className="carrousel-counter">
            {totalPictures > 1 && `${currentIndex + 1} / ${totalPictures}`} 

            </div>
        </div>
    );
}

export default Carrousel;
