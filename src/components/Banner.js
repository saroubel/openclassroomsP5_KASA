import React from "react";
import "../styles/Banner.scss";


function Banner ({ image, texte }) {
  return (
    <div className="banner">
      <img className="banner_img" src={image} alt="Bannière" />
      <div className="banner_dark"></div>
      <span className="banner_txt">{texte}</span>
    </div>
  );
}

export default Banner;