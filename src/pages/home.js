import React from "react";
//Ajout des composants
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";  
//Ajout des images
import banner_home from "../assets/banner/banner_home.png";

function Home() {
    return (
        <div>
            <Header />  
            <Banner image={banner_home} texte="Chez vous, partout et ailleurs" />
            <Gallery />
            <Footer />          
        </div>
    );
}

export default Home;