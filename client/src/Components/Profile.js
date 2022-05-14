import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getcurrent, mymovies } from "../redux/actions";
import MovieCard from "./MovieCard";

function Profile() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getcurrent());
    }, []);
    useEffect(() => {
        dispatch(mymovies());
    }, []);
    const mymovie = useSelector((state) => state.MovieReducer.mymovies);
    const user = useSelector((state) => state.Reducer.user);
    return (
        <div>
            <h1>hello {user && user.email}</h1>

            {mymovie && mymovie.map((el) => <MovieCard el={el}></MovieCard>)}
        </div>
    );
}

export default Profile;