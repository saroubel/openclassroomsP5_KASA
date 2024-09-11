import React from "react"; 
import Tags from "./Tags";
import Logements from "../../data/logements.json";

function LogementDetailsDisplay({id}) {
    return (
        <div>
            {/* lister les logements */}
            {Logements.map((logement) => (
                logement.id === id && (
                <Tags nomTags={logement.tags} />)
            ))}
        </div>
    );
}

export default LogementDetailsDisplay;