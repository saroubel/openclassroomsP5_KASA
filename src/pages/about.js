import React from "react";
//On ajoute nos composants
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import banner_about from "../assets/banner/banner_about.png";
//les données de la page about depuis fichier json
import CollapseData from "../data/collapses.json";

function About() {
    return (
        <div>
            <Header />
            <Banner image={banner_about}/>
            <main className="about-main" style={{paddingLeft: "10%", paddingRight: "10%"}}>
            {/* Affichage des collapses */}
            {CollapseData.map((collapse) => (                   // on liste les données de collapse depuis fichier json 
                <Collapse key={collapse.id}                     // Key pour que chaque collapse soit unique
                          title={collapse.title} 
                          content={collapse.content} />
            ))}
            </main>
            <Footer />
        </div>
    );
}

export default About;