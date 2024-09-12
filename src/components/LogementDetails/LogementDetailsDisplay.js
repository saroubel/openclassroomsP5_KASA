import React from "react"; 
import Logements from "../../data/logements.json";
import "../../styles/LogementDetails/LogementsDetailsDisplay.scss";
// les composants
import Tags from "./Tags";
import Carrousel from "./Carrousel";

function LogementDetailsDisplay({id}) {
    return (
        <div>
            {/* lister les logements */}
            {Logements.map((logement) => (
                logement.id === id && (
                <>
                        {/**Carrousel**/}
                        <Carrousel pictures={logement.pictures} />
                        <h2 className="title-logement">{logement.title}</h2>
                        <p className="location">{logement.location}</p>

                        {/**Host**/}
                        {/**Rating**/}

                        {/**Tags de chaque logement**/}
                        <Tags listTags={logement.tags} />

                        {/**Description**/}
                        {/**Equipements**/}
                </>

            )))}
        </div>    
    );
}

export default LogementDetailsDisplay;