import React from "react";
import { useState } from "react";                       
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //icone de FontAwesome pour les chevrons
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


function Carrousel({ pictures }) {
    //Var d'index de quelle image on est
    const [currentIndex, setCurrentIndex] = useState(0) 
    const totalPictures = pictures.length

    //F. slid suivant
    const nextSlide = () => {
        // si c'la dernière image on retourne à la 1ère sinon +1 à l'index
        currentIndex === totalPictures - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)
    }
    //F.slid précédent
    const prevSlide = () => { 
        // si c'est la 1ère image on retourne à la 1ère sinon -1 à l'index
        currentIndex === 0 ? setCurrentIndex(totalPictures - 1) : setCurrentIndex(currentIndex - 1)       
    }



    return (
        <div className="carrousel">
            {/* Image actuelle */}
            <img className="carrousel-img" src={pictures[currentIndex]} alt={pictures[currentIndex]} />


            {/* Affichage flèches de navigation s'il y a plus d'une image */}
            {totalPictures > 1 && (
                <div>
                    {/* click slid précédent */}
                    <div onClick={prevSlide} className="carrousel-button carrousel-button-left">
                        <FontAwesomeIcon icon={faChevronLeft} className="arrow" alt =" flèche précedente" />
                    </div>

                    {/* clickpour slid suivant */}
                    <div onClick={nextSlide} className="carrousel-button carrousel-button-right">
                        <FontAwesomeIcon icon={faChevronRight} className="arrow" alt = "flèche suivante"/>
                    </div>
                </div>
            )}


            {/* Affichage du compteur s'il y a plus d'une image */}
            <div className="carrousel-counter">
            {totalPictures > 1 && `${currentIndex + 1} / ${totalPictures}`} 

            </div>
        </div>
    );
}

export default Carrousel;




// Ce composant reçoit prop 'pictures' contenant un tableau d'images
// UseState pour gérer l'index de l'image actuellement affichée
// Fonctions nextSlide et prevSlide pour naviguer entre les img
// Affiche l'image actuelle basée sur l'index courant
// Affiche des flèche de navigation et le compteur si il y a plus d'une image

// index est géré par useState et affiche img actuellement , 0 pour la 1ère img par défaut
// setIndex pour mettre à jour cet index