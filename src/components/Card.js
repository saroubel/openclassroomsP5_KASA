import React from 'react';
import '../styles/Card.scss';

function Card({image, title}) {
    return (
      <div className="card">
        <img className="card_img" src={image} alt={title} />
        <h2 className="card_title">{title}</h2>
      </div>
    );
}

export default Card;