import React from "react";
import "../../styles/LogementDetails/Rating.scss";
// les icones de Font Awesome pour les etoiles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/free-solid-svg-icons"; //une étoile remplie


function Rating({rating}) {
    const notes = [1, 2, 3, 4, 5];

    return (
        <div className="rating">
            {/*Afficher les etoiles suivant la note*/}
            {/*Si note est inferieur ou égale Rating, affiche étoile remplie, sinon vide */}
            {notes.map((note) => ( 
                note<=rating ?
                <FontAwesomeIcon 
                    key={note}
                    icon={faStar} 
                    className="star-full" 
                /> :
                <FontAwesomeIcon 
                    key={note}
                    icon={faStar} 
                    className="star-empty" 
                />
            ))}
        </div>
    );
}


export default Rating;

