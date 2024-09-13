import React from "react";
import "../../styles/LogementDetails/Tags.scss";

function Tags({ listTags }) {
    return (
        <div className="tag-container">
            {/* OneTag affiche tag par tag */}
            {listTags.map((oneTag) => (
            <span key = {oneTag} className="tag"> {oneTag} </span>             
            ))}
        </div>
    );
}

export default Tags;
