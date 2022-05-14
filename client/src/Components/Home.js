import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

function Home() {
    const movies = useSelector((state) => state.MovieReducer.movies);
    console.log({ msg: 'movies', movies })
    let moviesToDisplay;
    if (movies) {
        moviesToDisplay = movies.map((el) => (
            <MovieCard el={el}></MovieCard>
        ));
    } else {
        moviesToDisplay = <div>Movies not loaded</div>;
    }
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
            }}
        >
            {moviesToDisplay}
        </div>
    );
}

export default Home;