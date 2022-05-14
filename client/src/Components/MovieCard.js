import React from "react";

function MovieCard({ el }) {
    return (
        <div>
            <h1> {el.title} </h1>
            <img src={el.image} />
        </div>
    );
}

export default MovieCard;