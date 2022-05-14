const { GET_MOVIES, MY_MOVIES } = require("../types");

const initalState = {
    movies: null,
    mymovies: null,
    movie: {},
};

const MovieReducer = (state = initalState, { payload, type }) => {
    switch (type) {
        case GET_MOVIES:
            return { ...state, movies: payload.movies };
        case MY_MOVIES:
            return { ...state, mymovies: payload.mymovies };

        default:
            return state;
    }
};

export default MovieReducer;