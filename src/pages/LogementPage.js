import React from "react";
//On ajoute nos composants
import Header from "../components/Header";
import Footer from "../components/Footer";
import LogementDetailsDisplay from "../components/LogementDetails/LogementDetailsDisplay";
import { useParams } from "react-router-dom"; //passer parametres dans l'url et les recuperer avec useParams

function LogementPage() {
     const {id} = useParams(); //recupére l'id dans l'url et on le met dans l'objet id 
    return (
        <div>
            <Header /> 
            <LogementDetailsDisplay id={id} />
            <Footer />          
        </div>
    );
}

export default LogementPage;