import React from "react";

function Banner ({ image, texte }) {
  return (
    <div className="banner">
      <img className="banner_img" src={image} alt="Bannière" />
      <div className="banner_dark"></div>
      <h1 className="banner_txt">{texte}</h1>
    </div>
  )
}

export default Banner;