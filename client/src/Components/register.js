import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearerrors, register } from "../redux/actions";
function Register() {
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const errors = useSelector((state) => state.Reducer.errors);
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            {
                errors && errors.errors.map((el) => alert(el.msg));
            }
            if (errors) {
                dispatch(clearerrors());
            }
        }, 1000);
    }, [errors]);
    return (
        <div>
            <div>
                <div className="login-sqare">
                    <h1 className="title">Sign Up</h1>
                    <form action="#" className="sign-form">
                        <div>
                            <input
                                className="input"
                                type="email"
                                name="email"
                                onChange={(e) => setemail(e.target.value)}
                                placeholder="Email or phone number"
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div>
                            <input
                                className="input"
                                type="password"
                                name="password"
                                onChange={(e) => setpassword(e.target.value)}
                                placeholder="Password"
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div>
                            <button
                                className="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(register({ email, password }, Navigate));
                                }}
                            >
                                Sign Up
                            </button>
                        </div>
                        <div class="new-to-netflix">
                            <p>
                                New to Us?
                                <Link to="/signIn">
                                    {" "}
                                    <span class="sign-up-now">
                                        {" "}
                                        <a href="#">Already have an account Sign In.</a>{" "}
                                    </span>
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default Register;