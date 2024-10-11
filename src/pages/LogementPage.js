import React from "react";
import { useParams } from "react-router-dom";
//On ajoute nos composants
import Header from "../components/Header";
import Footer from "../components/Footer";
import LogementDetailsDisplay from "../components/LogementDetails/LogementDetailsDisplay";

function LogementPage() {
     const {id} = useParams();
    return (
        <div>
            <Header /> 
            <LogementDetailsDisplay id={id} />
            <Footer />          
        </div>
    );
}

export default LogementPage;



// UseParams est un Hook pour extraire des paramètres de l'URL (dans ce cas, l'ID du logement)
// L'ID est utilisé dans le composant LogementDetailsDisplay pour afficher les info du logement correspondant