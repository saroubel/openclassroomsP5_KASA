import React from "react";
//Ajout descomposants
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
//Ajout des images
import banner_home from "../assets/banner/banner_home.png";

function Home() {
    return (
        <div>
            <Header />  
            <Banner image={banner_home} texte="Chez vous, partout et ailleurs" />
            <Footer />          
        </div>
    );
}

export default Home;