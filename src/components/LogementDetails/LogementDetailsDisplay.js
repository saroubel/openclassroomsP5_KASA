import React, { Fragment } from "react"; 
import Logements from "../../data/logements.json";
import "../../styles/LogementDetails/LogementsDetailsDisplay.scss";
// les composants
import Tags from "./Tags";
import Carrousel from "./Carrousel";
import Host from "./Host";
import Rating from "./Rating";
import Collapse from "../Collapse.js";

function LogementDetailsDisplay({id}) {
    return (
        <div>
            {/* lister les logements */}
            {Logements.map((logement) => (
                logement.id === id && (

                <Fragment key={logement.id}>

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
                        <Collapse title="Description" content={logement.description} />
                        {/**Equipements**/}
                        <Collapse title="Equipements" 
                                  content={
                                    <ul> {logement.equipments.map((oneEquipment, index) => 
                                           <li key={index}>{oneEquipment}</li>
                                         )}
                                    </ul>
                                  }      
                        />
                    </div>

                </Fragment>
            )))}
        </div>    
    );
}



export default LogementDetailsDisplay;