import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addmovie } from "../redux/actions";

function Addmovie() {
    const [title, settitle] = useState("");
    const [image, setimage] = useState("");
    const dispatch = useDispatch();
    return (
        <div>
            <input type="text" onChange={(e) => settitle(e.target.value)} />
            <input type="file" onChange={(e) => setimage(e.target.files[0])} />
            <button onClick={() => dispatch(addmovie({ title, image }))}>add</button>
        </div>
    );
}

export default Addmovie;