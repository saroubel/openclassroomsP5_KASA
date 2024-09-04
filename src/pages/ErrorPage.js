import React from "react";
//On ajoute nos composants
import Header from "../components/Header";
import ErrorContent from "../components/Error"; 
import Footer from "../components/Footer";

function Error() {
    return (
        <div>
            <Header />
            <ErrorContent />
            <Footer />
        </div>
    );
}

export default Error;