import React from "react";
import "../../styles/LogementDetails/Host.scss";

function Host({host}) {
    return (
        <div className="host">
            <div className="host-name">{host.name}</div>
            <div className="host-picture">
                <img src={host.picture} alt="Picture-host" />
            </div>
        </div>
    );
}

export default Host;