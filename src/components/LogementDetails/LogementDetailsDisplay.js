import React from "react"; 
import Logements from "../../data/logements.json";
import "../../styles/LogementDetails/LogementsDetailsDisplay.scss";
// les composants
import Tags from "./Tags";
import Carrousel from "./Carrousel";
import Host from "./Host";

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
                            {/**Tags de chaque logement**/}
                            <Tags listTags={logement.tags} />
                        </div>
                        <div className="logement-details-host">
                            {/**Host**/}
                            <Host host={logement.host} />
                            {/**Rating**/}
                        </div>
                    </div>

                        

                        

                        {/**Description**/}
                        {/**Equipements**/}
                </>

            )))}
        </div>    
    );
}

export default LogementDetailsDisplay;