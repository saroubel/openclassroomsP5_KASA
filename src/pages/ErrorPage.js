import React from "react";
//On ajoute nos composants
import Header from "../components/Header";
import ErrorContent from "../components/Error"; 

function Error() {
    return (
        <div>
            <Header />
            <ErrorContent />
        </div>
    );
}

export default Error;