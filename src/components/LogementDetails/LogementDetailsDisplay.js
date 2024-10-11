import React, { Fragment } from "react"; 
import Logements from "../../data/logements.json";
//navigatgion pour afficher la page erreur
import { Navigate } from "react-router-dom";
// les composants
import Tags from "./Tags";
import Carrousel from "./Carrousel";
import Host from "./Host";
import Rating from "./Rating";
import Collapse from "../Collapse.js";

function LogementDetailsDisplay({id}) {
    
    //vérification si logement existe sinon redirection vers page erreur
    const logement = Logements.find((logement) => logement.id === id);
    if (!logement) {
        return <Navigate to="/error" replace />
    }
    //Affichage des logements
    return (
        <div>
                <Fragment>
                    <Carrousel pictures={logement.pictures} />
                    {/**Détails**/}
                    <div className="logement-details">
                        <div className="logement-details-location">
                            <h2 className="title-logement">{logement.title}</h2>
                            <p className="location">{logement.location}</p>
                            <Tags listTags={logement.tags} />
                        </div>

                        <div className="logement-details-host">
                            <Host host={logement.host} />
                            <Rating rating={logement.rating} />
                        </div>
                    </div>

                    {/**Collapse**/}
                    <div className="collapse-logement">
                        <div className="collapse-description">
                        <Collapse title="Description" content={logement.description} />
                        </div>

                        <div className="collapse-equipements">
                        <Collapse title="Equipements" 
                                  content={
                                    <ul> {logement.equipments.map((oneEquipment, index) => 
                                           <li key={index}>{oneEquipment}</li>
                                         )}
                                    </ul>
                                  }      
                        />
                        </div>
                    </div>
                </Fragment>
        </div>    
    );
}

export default LogementDetailsDisplay;


//Ce composant affiche les détails d'un logement en vérifiant qu'il existe par l'ID
//Si logement n'existe pas on redirige vers page d'erreur
//Si logement existe on affiche les sous-composants 
//Pour présenter les info du logement, on utilise les données du fichier JSON
