import React from "react";
//On ajoute nos composants
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
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