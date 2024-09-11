import React from "react";
// import "../styles/LogementDetails/Tags.scss";

function Tags({ nomTags }) {
    return (
        //map pour afficher listes de tags
        <div className="tag-container">
            <span className="tag"> {nomTags} </span>
        </div>
    );
}

export default Tags;
