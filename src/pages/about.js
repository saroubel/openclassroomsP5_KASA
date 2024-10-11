import React from "react";
//On ajoute nos composants
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

import banner_about from "../assets/banner/banner_about.png";
import CollapseData from "../data/collapses.json";

function About() {
    return (
        <div>
            <Header />
            <Banner image={banner_about}/>
            <main className="about-main" >
            {/* Affichage des collapses */}
            {CollapseData.map((collapse) => (                       // on liste les données de collapse depuis fichier json 
                <Collapse key={collapse.id}                         // Key pour que chaque collapse soit unique
                          title={collapse.title} 
                          content={collapse.content} />
            ))}
            </main>
            <Footer />
        </div>
    );
}

export default About;



// Le composant About intègre plusieurs éléments réutilisables (Header, Banner et Footer) ainsi que le composant Collapse
// Map() est employée pour générer dynamiquement une liste de composants Collapse 
// Chacun collapse contient un titre et un contenu définis dans un fichier json