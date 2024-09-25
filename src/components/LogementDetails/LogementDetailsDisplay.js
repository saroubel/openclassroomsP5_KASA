import React, { Fragment } from "react"; 
import Logements from "../../data/logements.json";
import "../../styles/LogementDetails/LogementsDetailsDisplay.scss";
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
                    {/**Carrousel**/}
                    <Carrousel pictures={logement.pictures} />

                    {/**Details**/}
                    <div className="logement-details">
                        <div className="logement-details-location">
                            {/**Titre**/}
                             <h2 className="title-logement">{logement.title}</h2>
                            {/**Location**/}
                            <p className="location">{logement.location}</p>
                            {/**Tags**/}
                            <Tags listTags={logement.tags} />
                        </div>
                        <div className="logement-details-host">
                            {/**Host**/}
                            <Host host={logement.host} />
                            {/**Rating**/}
                            <Rating rating={logement.rating} />
                        </div>
                    </div>

                    {/**Collapse**/}
                    <div className="collapse-logement">
                        {/**Description**/}
                        <div className="collapse-description">
                        <Collapse title="Description" content={logement.description} />
                        </div>
                        {/**Equipements**/}
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