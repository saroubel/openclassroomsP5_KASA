import React from 'react';
import '../styles/Card.scss';
import {Link} from "react-router-dom";

function Card({image, title, id}) {
    return (
        <Link className="card" to={`/logement/${id}`}>          {/* link vers logement où ${id} est remplacé par l'ID réel du logement */}
        <img className="card_img" src={image} alt={title} />
        <h2 className="card_title">{title}</h2>
        </Link>
    );
}

export default Card;