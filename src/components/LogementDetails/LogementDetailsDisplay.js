import React from "react"; 
import Logements from "../../data/logements.json";
import "../../styles/LogementDetails/LogementsDetailsDisplay.scss";
// les composants
import Tags from "./Tags";
import Carrousel from "./Carrousel";
import Host from "./Host";
// import Rating from "./Rating";

function LogementDetailsDisplay({id}) {
    return (
        <div>
            {/* lister les logements */}
            {Logements.map((logement) => (
                logement.id === id && (
                <>
                    {/**Carrousel**/}
                    <Carrousel pictures={logement.pictures} />

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
                            {/* <Rating rating={logement.rating} /> */}
                        </div>
                    </div>

                        {/**Description**/}
                        <p className="description">{logement.description}</p>
                        {/**Equipements**/}
                        <p className="equipements">Equipements</p>
                        <ul className="list-equipements">
                            {logement.equipments.map((equipment) => (
                                <li key={equipment}>{equipment}</li>
                            ))}
                        </ul>
                </>

            )))}
        </div>    
    );
}

export default LogementDetailsDisplay;