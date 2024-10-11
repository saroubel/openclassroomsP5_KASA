import React from "react";

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


// Ce composant importe les info depuis le fichier json pour afficher le nom et l'image du host
// Il reçoit une prop host + info de host (name, picture)
