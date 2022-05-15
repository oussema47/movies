import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getmovies, logout } from "../redux/actions";
import "./Navbar.css";
function Navbar() {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.Reducer.auth);
    const user = useSelector((state) => state.Reducer.user);

    return (
        <>
            {auth && user.role == "user" ? (
                <nav>
                    <ul>
                        <Link to="/">
                            <li onClick={() => getmovies()(dispatch)}>Home</li>
                        </Link>
                        <Link to="/profile">
                            <li>Profile</li>
                        </Link>
                        <Link to="/add">
                            <li>ADD movie</li>
                        </Link>
                        <Link to="/signUp">
                            <li onClick={() => dispatch(logout())}>logout</li>
                        </Link>
                    </ul>
                </nav>
            ) : auth && user.role == "admin" ? (
                <nav>
                    <ul>
                        <Link to="/admin">
                            <li>Home</li>
                        </Link>

                        <Link to="/signUp">
                            <li onClick={() => dispatch(logout())}>logout</li>
                        </Link>
                    </ul>
                </nav>
            ) : (
                <nav>
                    <ul>
                        <Link to="/">
                            <li onClick={() => getmovies()(dispatch)}>Home</li>
                        </Link>
                        <Link to="/signIn">
                            <li>Sign In</li>
                        </Link>
                        <Link to="/signUp">
                            <li>Sign Up</li>
                        </Link>
                    </ul>
                </nav>
            )}
        </>
    );
}

export default Navbar;