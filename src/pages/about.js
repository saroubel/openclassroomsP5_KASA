import React from "react";
//On ajoute nos composants
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import banner_about from "../assets/banner/banner_about.png";

function About() {
    return (
        <div>
            <Header />
            <Banner image={banner_about}/>
            <Footer />
        </div>
    );
}

export default About;