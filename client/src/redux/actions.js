import axios from "axios";

import {
    CLEARERRORS,
    FAIL,
    GET_CURRENT,
    GET_MOVIES,
    LOGIN,
    LOGOUT,
    REGISTER,
    MY_MOVIES,
} from "./types";
export const register = (newuser, Navigate) => async (dispatch) => {
    try {
        const res = await axios.post("/api/auth/signUp", newuser);
        dispatch({ type: REGISTER, payload: res.data });
        console.log(res.data);
        Navigate("/Profile");
    } catch (error) {
        dispatch({ type: FAIL, payload: error.response.data });
    }
};
export const login = (newuser, Navigate) => async (dispatch) => {
    try {
        const res = await axios.post("/api/auth/signIn", newuser);
        dispatch({ type: LOGIN, payload: res.data });
        console.log(res.data);
        Navigate("/Profile");
    } catch (error) {
        dispatch({ type: FAIL, payload: error.response.data });
    }
};

export const getcurrent = () => async (dispatch) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            authorization: token,
        },
    };
    try {
        const res = await axios.get("/api/auth/current", config);

        dispatch({ type: GET_CURRENT, payload: res.data });
    } catch (error) {
        console.log(error);
    }
};

export const logout = () => {
    return { type: LOGOUT };
};

export const clearerrors = () => {
    return { type: CLEARERRORS };
};

//   movies

export const getmovies = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/movies/");
        dispatch({ type: GET_MOVIES, payload: res.data });

    } catch (error) {
        console.log(error);
    }
};
export const mymovies = () => async (dispatch) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            authorization: token,
        },
    };
    try {
        const res = await axios.get("/api/movies/mymovies", config);

        dispatch({ type: MY_MOVIES, payload: res.data });
        console.log(res.data.mymovies);
    } catch (error) {
        console.log(error);
    }
};

export const addmovie =
    ({ title, image }) =>
        async (dispatch) => {
            const token = localStorage.getItem("token");
            const config = {
                headers: {
                    authorization: token,
                },
            };
            const info = new FormData();
            info.append("title", title);
            info.append("image", image);

            try {
                const res = await axios.post("/api/movies/addMovie", info, config);
                dispatch(getmovies());
            } catch (error) {
                console.log(error);
            }
        };